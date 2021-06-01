FROM node:fermium-alpine

WORKDIR /adapter
COPY ./package.json .

RUN npm install