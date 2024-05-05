FROM nginx:latest

RUN rm /usr/share/nginx/html/50x.html /usr/share/nginx/html/index.html

RUN mkdir -p /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/index_files

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY index_files /usr/share/nginx/html/index_files

EXPOSE 5149