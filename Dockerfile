FROM node:16-alpine3.11 as build-step

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install -g @angular/cli
RUN npm update

EXPOSE 4201

CMD ["ng", "serve", "--host=0.0.0.0"]