# Используйте официальный образ Nginx в качестве базового образа
FROM nginx:latest

# Создайте директорию, если она не существует
RUN mkdir -p /usr/share/nginx/html/resources

# Копируем HTML файл из текущей директории в директорию по умолчанию Nginx
COPY index.html /usr/share/nginx/html/resources/.

EXPOSE 5149