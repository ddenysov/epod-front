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

workspace-clear:
	ssh -i ${CERT_PATH} -l ubuntu ${LIVE_HOST} 'cd ~/deploy && docker ps && rm -rf ~/deploy/* && ls'

workspace-unpack:
	ssh -i ${CERT_PATH} -l ubuntu ${LIVE_HOST} 'cd ~/deploy && tar -zxvf workspace.tar.gz'

workspace-start:
	ssh -i ${CERT_PATH} -l ubuntu ${LIVE_HOST} 'cd ~/deploy && make stop && make build-container && make start'

workspace-upload:
	scp -i ${CERT_PATH} ./workspace.tar.gz ubuntu@${LIVE_HOST}:${DEPLOY_PATH}

pack:
	tar -czf workspace.tar.gz --exclude=workspace.tar.gz .

deploy: build pack workspace-clear workspace-upload workspace-unpack workspace-start

workspace-connect:
	ssh -i ${CERT_PATH} -l ubuntu ${LIVE_HOST}
