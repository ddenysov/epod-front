include .env
export

DC := docker-compose exec
DOCKER := docker
NODE := $(DC) node yarn
OS := $(shell uname)

build:
	@$(DC) build

start:
	@docker-compose up -d

stop:
	@docker-compose stop

build:
	@docker-compose build node

ssh:
	@$(DC) bash

deploy:
	@$(DEPLOY_COMMAND)

pack:
	tar -czf workspace.tar.gz --exclude=workspace.tar.gz .

