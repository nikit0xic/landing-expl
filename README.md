# landing-expl
### Описание
Репоиторий для настройки nginx сервера на отображения одной статичной html страницы без js кода и бэкэнда.

### Ссылки с примерами на страницу
- оригинал (trener-tennis.ru)
- тильда лендинг (https://tennis-trener.tilda.ws/)


```bash
cd ~/landing-expl/resources
sudo docker build -t landing_build_i .
```

```bash
    sudo docker run -p 8081:80 -d landing_build_i
```