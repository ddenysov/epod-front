include .env
export

DC := docker-compose run node
DOCKER := docker
NODE := $(DC) yarn
OS := $(shell uname)

build:
	@$(DC) build

start:
	@docker-compose up -d

stop:
	@docker-compose stop

build-container:
	@docker-compose build node

ssh:
	@$(DC) bash

upload:
	scp -i ${CERT_PATH} ./workspace.tar.gz ubuntu@${LIVE_HOST}:${DEPLOY_PATH}

pack:
	tar -czf workspace.tar.gz --exclude=workspace.tar.gz .

deploy: pack upload

build:
	@$(NODE) build

deploy-clean:
	rm -v !("filename")

deploy-stop:
	make stop

deploy-start:
	make start

deploy-unpack:
	tar -zxvf workspace.tar.gz
