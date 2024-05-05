# landing-expl
### Описание
Репоиторий для настройки nginx сервера на отображения одной статичной html страницы без js кода и бэкэнда.

### Ссылки с примерами на страницу
- оригинал (trener-tennis.ru)
- тильда лендинг (https://tennis-trener.tilda.ws/)


```bash
cd ~/landing-expl/resources
docker build -t my_img -f config.dockerfile .
```

```bash
    docker run -d my_img
```