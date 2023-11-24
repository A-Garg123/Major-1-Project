FROM node:alpine

WORKDIR /app

COPY ./package.json /app

RUN npm install 

RUN npm install firebase
COPY . /app
EXPOSE 3050
CMD ["npm", "start"]
