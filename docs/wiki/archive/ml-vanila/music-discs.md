---
outline: deep
lastUpdated: true
---

<Pill name="ML Ванила" link="./" icon="solar:archive-bold-duotone" color="#868dcc" /> <br/>
 
# Пластинки
На нашем сервере можно слушать любую музыку через пластинки используя плагин
[pv-addon-discs](https://modrinth.com/plugin/pv-addon-discs) на мод [PlasmoVoice](https://www.curseforge.com/minecraft/mc-mods/plasmo-voice)

## Использование
**Вам нужно [назначить](#assign) песню/аудио на любую пластинку в руке**
**Держа пластинку в руке вы так-же можете [стереть](#erase) песню и вернуть ее в обычное состояние**

## Назначение песни {#assign}

### 1. Поиском
Вам нужно держать любую музыкальную пластинку в руке

Дальше вам нужно прописать команду `/disc search <поисковой запрос>`
``` 
/disc search
```
После вам выведет в чат список вариантов на основе вашего запроса
Нажмите в чате на подходящий чтобы записать на диск мелодию

### 2. Ссылкой
Держа пластинку в руке пропишите команду 
`disc burn <ссылка> [Подпись пластинки]`
```
/disc burn
```

#### Поддерживаемые ссылки


| Сервисы | Форматы |
|---|---|
|YouTube видео и стримы|MP3|
|SoundCloud|FLAC|
|Bandcamp|WAV|
|Vimeo|Matroska/WebM (AAC, Opus или Vorbis кодеки)|
|Twitch стримы|MP4/M4A (AAC кодек)|
|Прямые HTTP ссылки|OGG стримы (Opus, Vorbis и FLAC кодеки)|
||AAC стримы|
||Плейлисты (M3U и PLS)|

### 3. Кодом
При использовании поиска `/disc search`, при наведении на песню будет команда `/disc burn` и код по типу `WiszAsVY-pg`. Этим кодом вы можете поделится чтобы другие игроки смогли поставить себе именно такую песню. 

Для этого вам нужно прописать команду `/disc burn [код]`
::: code-group
``` [Команда]
/disc burn
```
``` [Пример]
/disc burn WiszAsVY-pg
```
:::

## Стереть {#erase}
Чтобы вернуть пластинку  в руке в исходное состояние нужно прописать команду 
`/disc erase``
```
/disc erase
```