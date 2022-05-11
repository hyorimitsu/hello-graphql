include .env

new:
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)":/root -w /root node yarn create next-app --typescript
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)/$(API_DIR)":/app -w /app go-mod go mod tidy
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)/$(API_DIR)":/app -w /app gql init

run:
	docker-compose up -d

down:
	docker-compose down

deps: deps-api deps-web

deps-api:
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)/$(API_DIR)":/app -w /app go-mod go mod tidy
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)/$(API_DIR)":/app -w /app go-mod go mod vendor

deps-web:
	docker-compose -f docker-compose-tools.yaml run --rm -v "$$(pwd)/$(WEB_DIR)":/app -w /app node yarn install
