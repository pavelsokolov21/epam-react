FROM node:12 as build

WORKDIR /app

COPY package.json /app/package.json
RUN npm install --silent

COPY . /app
RUN npm run build


FROM nginx:1.19.0-alpine-perl

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm -v /etc/nginx/nginx.conf
COPY config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]
