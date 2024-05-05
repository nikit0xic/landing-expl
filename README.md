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
docker build -t my_img -f config.dockerfile .
```

```bash
    docker run -p 5149:70 -d my_img
```