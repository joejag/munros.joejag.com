start:
	(cd front && npm start)
	
deploy:
	(cd front && npm run build)
	aws s3 sync --size-only front/build s3://walk.joejag.com
	aws s3 cp front/build/index.html s3://walk.joejag.com/index.html
	aws cloudfront create-invalidation --distribution-id E38443GSUN2P8A --paths "/*"

back-deploy:
	(cd infra && terraform apply -auto-approve)

check-db:
	aws dynamodb scan --table-name munro_cache | jq '.Items | .[].id' | grep "S"