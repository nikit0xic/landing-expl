FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/tilda.conf

COPY index_files /var/www/index_files

EXPOSE 80