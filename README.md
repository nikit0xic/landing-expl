# landing-expl
### Описание
Репоиторий для настройки nginx сервера на отображения одной статичной html страницы без js кода и бэкэнда.

### Ссылки с примерами на страницу
- оригинал (trener-tennis.ru)
- тильда лендинг (https://tennis-trener.tilda.ws/)


```bash
cd ~/landing-expl/resources
chmod 777  config.dockerfile
chmod 777  index.html
docker build -t my_image_name -f config.dockerfile.
```

```bash
docker run -d --name my_container_name my_image_name
```
