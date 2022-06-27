FROM node:lts as builder

WORKDIR /app

CMD [ "yarn", "start" ]

ENV HOST 0.0.0.0
ENV BACKEND=http://nginx
EXPOSE 3000
