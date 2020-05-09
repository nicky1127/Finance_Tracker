FROM node:13.13.0-alpine3.11

RUN mkdir -p /srv/app/fr-shohin-admin-server
WORKDIR /srv/app/fr-shohin-admin-server

COPY package.json /srv/app/fr-shohin-admin-server
COPY package-lock.json /srv/app/fr-shohin-admin-server

RUN npm install

COPY . /srv/app/fr-shohin-admin-server

CMD ["npm", "run", "dev"]