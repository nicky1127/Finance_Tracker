FROM node:13.13.0-alpine3.11 as builder

RUN mkdir -p /srv/app/nickylai-admin-client
WORKDIR /srv/app/nickylai-admin-client

COPY package*.json /srv/app/nickylai-admin-client/

RUN npm ci

COPY . /srv/app/nickylai-admin-client/

RUN npm run build


FROM nginx:1.16.0-alpine
COPY --from=builder /srv/app/nickylai-admin-client/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]