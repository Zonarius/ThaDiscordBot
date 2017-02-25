FROM node:alpine

WORKDIR /app
COPY "./package.json" "./package.json"
RUN npm install

COPY "./lib" "./lib/"
ENTRYPOINT node "./lib/index.js"