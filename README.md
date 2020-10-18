
## Запуск
Приложение зависит от данных авторизации vk-bridge. При стандартном запуске с localhost они не работают, поэтому в настройках приложения VK mini APP стоит флаг dev mode дл домена m.vk.com
webpack-dev-server также нужно запускать в режиме HTTPS и игнорировать предупреждение сертификата 

Таким образом https://m.vk.com/app7631008 будет прокси для localhost:4200 с рабаотющими методами vk-bridge

https://vk.com/app7631008 - CI
https://m.vk.com/app7631008 - (dev mode, localhost)

## Dev tools
В режиме iframe (m.vk.com) vue devtools не работают, нужно запускать в отдельной вкладке терминала `$ vue-devtools` (предварительно установив пакет глобально через -g) и добавив script тег в шапку index.html

## Backend API URL
https://documenter.getpostman.com/view/6099570/TVCZZWUY#039a195f-66e1-4ad1-bfe4-7ed5d15417ad

## CI
https://ft-pwc-frontend.dline-rhost.ru

## Backend log
https://ft-pwc-backend.dline-rhost.ru/telescope/requests
