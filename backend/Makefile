include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: typeorm

 run:
	yarn typeorm migration:run

 revert:
	yarn typeorm migration:revert

.PHONY: typeorm

 clean:
	yarn jest --clearCache





