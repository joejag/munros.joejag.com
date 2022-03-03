start:
	(cd front && npm start)
	
deploy:
	(cd front && npm run build)
	aws s3 sync front/build s3://walk.joejag.com
	aws cloudfront create-invalidation --distribution-id E38443GSUN2P8A --paths "/*"

back-deploy:
	(cd back && terraform apply -auto-approve)