FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/tilda.conf

COPY resources /var/www/resources

EXPOSE 80