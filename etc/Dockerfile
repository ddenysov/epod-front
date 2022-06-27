FROM node:lts as builder

WORKDIR /app

CMD [ "yarn", "start" ]

ENV HOST 0.0.0.0
ENV BACKEND=http://host.docker.internal:2000
EXPOSE 3000
