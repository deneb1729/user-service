db-up:
	docker-compose -f testing/database.yml up -d

db-down:
	docker-compose -f testing/database.yml down
