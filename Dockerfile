FROM node:14-alpine
ENV app_home /usr/src/app

WORKDIR $app_home
COPY package*.json $app_home/
RUN npm ci

COPY . $app_home/
RUN npm run build

RUN npm i -g nodemon

ENTRYPOINT [ "nodemon", "start", "/usr/src/app/dist/index.js" ]
