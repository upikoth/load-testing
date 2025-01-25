# Нагрузочное тестирование

k6 -> prometheus -> grafana

docker-compose/dev environments

1. скачиваем, запускаем контейнеры
2. заходим в контейнер k6, выполняем команду нагрузочного теста

как отправить тест из k6 в prometheus:
https://grafana.com/docs/k6/latest/results-output/real-time/prometheus-remote-write/

```shell
K6_PROMETHEUS_RW_SERVER_URL=http://prometheus:9090/api/v1/write \
k6 run -o experimental-prometheus-rw test.ts
```

добавил K6_PROMETHEUS_RW_SERVER_URL в env контейнера в docker-compose, поэтому
```shell
k6 run -o experimental-prometheus-rw test.ts
```

4. k6 сохраняет результат в prometheus с помощью remote_write
5. смотрим результат в grafana. (dashboard id - 19665)
