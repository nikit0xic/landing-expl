FROM nginx:latest

# Создайте директорию, если она не существует
RUN mkdir -p /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/index_files

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY index_files /usr/share/nginx/html/index_files

EXPOSE 5149