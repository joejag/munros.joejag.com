# arn:aws:acm:us-east-1:140551133576:certificate/56a68c0a-186b-431f-8536-483b8c4326e3

# S3 bucket for website.
resource "aws_s3_bucket" "www_bucket" {
  bucket = "walk.joejag.com"
  acl = "public-read"
  policy = templatefile("templates/s3-policy.json", { bucket = "walk.joejag.com" })

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://walk.joejag.com"]
    max_age_seconds = 3000
  }

  website {
    index_document = "index.html"
    error_document = "index.html" // to allow all urls paths to work
  }
}

data "aws_acm_certificate" "issued" {
  provider = aws.us-east-1
  domain   = "walk.joejag.com"
  statuses = ["ISSUED"]
}

resource "aws_cloudfront_distribution" "www_s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.www_bucket.website_endpoint
    origin_id = "S3-walk.joejag.com"

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  aliases = ["walk.joejag.com"]

  custom_error_response {
    error_caching_min_ttl = 0
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "S3-walk.joejag.com"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 31536000
    default_ttl = 31536000
    max_ttl = 31536000
    compress = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.issued.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}
