

locals {
  prefix = "walkhighlands_munros"
}

# LAMBDA

module "python_lambda_archive" {
  source = "rojopolis/lambda-python-archive/aws"

  src_dir     = "${path.module}/src"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_lambda_function" "walkhighlands_munros" {
  function_name = "${local.prefix}-fn"

  runtime = "python3.8"
  handler = "walkhighlands.handler"

  role = aws_iam_role.lambda_exec.arn

  filename         = module.python_lambda_archive.archive_path
  source_code_hash = module.python_lambda_archive.source_code_hash
  timeout = 20
}

resource "aws_iam_role" "lambda_exec" {
  name = "${local.prefix}-serverless_lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_cloudwatch_log_group" "walkhighlands_munros" {
  name = "/aws/lambda/${aws_lambda_function.walkhighlands_munros.function_name}"

  retention_in_days = 30
}

# API GATEWAY

resource "aws_apigatewayv2_api" "lambda" {
  name          = "${local.prefix}-serverless_lambda_gw"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "lambda" {
  api_id = aws_apigatewayv2_api.lambda.id

  name        = "prod"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gw.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_apigatewayv2_integration" "walkhighlands_munros" {
  api_id = aws_apigatewayv2_api.lambda.id

  integration_uri    = aws_lambda_function.walkhighlands_munros.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "walkhighlands_munros" {
  api_id = aws_apigatewayv2_api.lambda.id

  route_key = "GET /munros"
  target    = "integrations/${aws_apigatewayv2_integration.walkhighlands_munros.id}"
}

resource "aws_cloudwatch_log_group" "api_gw" {
  name = "/aws/api_gw/${aws_apigatewayv2_api.lambda.name}"

  retention_in_days = 30
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "${local.prefix}-AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.walkhighlands_munros.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}
