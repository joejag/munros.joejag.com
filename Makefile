start:
	(cd front && npm start)
	
deploy:
	(cd front && npm run deploy)

back-deploy:
	(cd back && terraform apply -auto-approve)