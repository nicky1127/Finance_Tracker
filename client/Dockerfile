FROM node:13.13.0-alpine3.11

RUN mkdir -p /srv/app/fr-shohin-admin-client
WORKDIR /srv/app/fr-shohin-admin-client

COPY package.json /srv/app/fr-shohin-admin-client
COPY package-lock.json /srv/app/fr-shohin-admin-client

RUN npm install

COPY . /srv/app/fr-shohin-admin-client

CMD ["npm", "start"]