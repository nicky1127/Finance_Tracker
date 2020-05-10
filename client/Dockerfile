FROM node:13.13.0-alpine3.11

RUN mkdir -p /srv/app/nickylai-admin-client
WORKDIR /srv/app/nickylai-admin-client

COPY package.json /srv/app/nickylai-admin-client
COPY package-lock.json /srv/app/nickylai-admin-client

RUN npm install

COPY . /srv/app/nickylai-admin-client

CMD ["npm", "start"]