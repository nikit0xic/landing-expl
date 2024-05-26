FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY index_files /var/www/index_files

EXPOSE 80