FROM node:13.13.0-alpine3.11

RUN mkdir -p /srv/app/nickylai-admin-client
WORKDIR /srv/app/nickylai-admin-client

COPY package*.json /srv/app/nickylai-admin-client/

RUN npm ci

COPY . /srv/app/nickylai-admin-client/

RUN npm run build

ENTRYPOINT ["npx", "http-server", "./build", "-p", "3001","-o", "172.20.0.3:3001"]