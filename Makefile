db-up:
	docker-compose -f testing/database.yml up -d

db-down:
	docker-compose -f testing/database.yml down

dev-build:
	docker build -t api-user:develop .

dev-up: dev-build
	docker run --rm -d --name api-server -p 3000:3001 -e PORT=3001 api-user:develop

dev-down:
	docker stop api-server

clean-images:
	docker rmi $(docker images -f "dangling=true" -q)
