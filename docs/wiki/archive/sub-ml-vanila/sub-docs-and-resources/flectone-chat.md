---
outline: deep
lastUpdated: true
---

# FlectoneChat
<sub> Элегантная рукопись </sub>

## Это документация по плагину на чат FlectoneChat
Тут описаны команды плагина, его фишки, наши настройки, и все остальное что касается обычного игрока.

Используйте список справа чтобы перемещаться между разделами

> [!WARNING] Это не официальная документация плагина! 
> *Официальная документация ->* [Github](https://github.com/Flectone/FlectoneChat) , [FlectoneChat docs](https://chat.flectone.net/docs/)

## Функции
### Чаты сервера

**<span style="color: lightblue;">Глобальный:</span>** Видит весь сервер и дискорд чат <br />
Префикс: `!` в начале сообщения

**<span style="color: orange;">Локальный:</span>** Видят игроки на ограниченном расстоянии <br />
Префикс: Никакой, просто писать в чат

**<span style="color: green;">Шепот:</span>** Видят игроки на очень маленьком расстоянии <br />
Префикс: `~` в начале сообщения

### Интерактивный чат
Наводитесь на текст в чате чтобы узнать подробности или интерактировать с сообщениями.

### Метки
Вы можете устанавливать метки при помощи Деревянного Меча  нажимая ПКМ или ЛКМ по блокам и мобам в радиусе 30 блоков 

Чтобы изменить цвет метки, просто переименуйте Деревянный Меч в цвет который вы желаете.

Например, красный `RED`

### Подпись предметов
Вы можете подписать любой предмет в инвентаре вашим ником в цвете.
Вам нужно взять любой краситель  в левую руку, любой предмет  в правую руку и кликнуть ЛКМ по наковальне 

#### Убрать подпись
Чтобы убрать подпись вам нужно нажать подписанным предметом ПКМ по точилу 
Вам выпадет краситель.

### Ники игроков
Чтобы отобразить ник игрока на сервере просто нажмите по нему ПКМ

### Стук по блокам
Вы можете стучать по некоторым блокам зажав ШИФТ + ЛКМ <br />
Вы можете стучать по  Дверям и Стеклу

### Голосования
Чтобы провести голосование вам нужно иметь специальные права сервера.

Вы все еще можете голосовать нажимая  над вопросом голосования в чате.
Голосование идет короткое время.

## 🔤 Сообщения
### 🖌️ Форматирование текста
- `|| ||` **Спойлер** <br />
Вы можете скрыть свое сообщение при помощи спойлера используя `||` в виде `|| текст ||`
Наведитесь чтобы посмотреть содержание

- `** **` **Жирный текст**
Вы можете писать жирным текстом в чате при помощи `**` в виде `** текст **` .

- `## ##` ***Курсив***
Вы можете писать курсивом в чате при помощи `##` в виде `## текст ##` .

- `__ __` **__Подчеркнутый__**
Вы можете писать подчеркнутым текстом при помощи `__` в виде `__ текст __` .


- `~~ ~~` **~~Перечеркнутый~~**
Вы можете писать перечеркнутым текстом при помощи `~~` в виде `~~ текст ~~` .


- `?? ??` **Запутанный**
Вы можете писать зА#^aн)м текстом при помощи `??` в виде `?? текст ??` .

> [!NOTE] Помимо чата, форматирование текста 🖌️ работает в
> Книгах , Наковальнях, и Табличках

### Вставки
- `%ping%`  **Отобразить свой ПИНГ** <br />
Чтобы отобразить свой пинг в чате вам нужно просто ввести в чат `%ping%`



- `%cords%` **Отправить координаты** <br />
Чтобы отправить свои координаты в чат, вам нужно просто ввести в чат %cords%
В чате отобразится мир в котором вы находитесь, биом, и координаты по XYZ.



- `%stats%` **Отправить текущую статистику** <br />
Чтобы отправить свою статистику в чат, вам нужно просто ввести в чат `%stats%`
В чате отобразится единицы вашего здоровья, единицы брони, текущая сила удара, уровень опыта, и единицы голода.
 (Урон: 8.0 с незеритовым мечом)


- `%item%` **Предмет в руке** <br />
Чтобы отправить в чат информацию о предмете который вы держите в данный момент, вам нужно ввести `%item%` в чат.


- `%skin%` **Отправить скин** <br />
Чтобы отправить свой скин в чат введите `%skin%`
Чтобы скачать скин, просто нажмите на него в чате и перейдите по ссылке


- `@` **Упоминание игрока** <br />
Вы можете упомянуть игрока сервера в чате символом `@ + ник игрока`.
Так-же на упоминание игрока в чате можно нажать чтобы начать писать личное сообщение игроку.
Упоминание сопровождается звуком.


- **Кликабельные ссылки** <br />
При отправке любого типа ссылок в чат, все могут нажать на ссылку чтобы открыть ее.

> [!NOTE] Помимо чата, вставки📥 работают в 
> Книгах , Наковальнях, и Табличках

### 🔀 Замена текста
Некоторые символы, слова, и смайлики из символов `:D` могут заменятся на готовые смайлики

Вот таблица где расписано что на что меняется
Это значения по умолчанию, они могут изменится в будущем

| Ввод | Замена | Вывод |
| --- | --- | --- |
| `:)` |-> |☺ |
| `:D` |-> |☻|
| `:(`|-> |☹|
| `ok:`|-> | 🖒|
| `:+1:`|-> |🖒 |
| `:-1:`|-> | 🖓|
| `:cool:`|-> | 😎|
| `B)`|-> |😎 |
| `:clown:`|-> |🤡 |
| `<)`|-> | ❤|
| `xd`|-> |😆 |
| `%)`|-> | 😵|
| `=D`|-> |😃 |
| `>:(`|-> |😡 |
| `:idk:`|-> |\¯\(ツ)/¯ |
| `:angry:`|-> |(╯°□°)╯︵ ┻━┻ |
| `:happy:` |-> |＼(＾O＾)／ |
> [!NOTE] Помимо чата, замена текста 🔀 работает в 
> Книгах , Наковальнях, и Табличках

## 🧰 Команды
`/reply`
```
/reply
```
Ответить на личное сообщение 

### Перевести сообщение
`/translateto  <язык сообщения> <язык перевода> \[сообщение]`
::: code-group
``` [Команда]
/translateto
```
``` [Пример]
/translateto ru en Лондон это столица Великобритании
```
:::
Вы можете перевести сообщение перед отправкой при помощи этой команды
Языки в формате en, ru 🇷🇺 , uk 🇺🇦, es 🇪🇸, pl 🇵🇱, fr 🇫🇷,  и так далее

### Настройки чата
`/chatcolor \[цвет1] \[цвет2]`
::: code-group
``` [Команда]
/chatcolor
```
``` [Пример]
/chatcolor &6 #1abaf0
```
:::
Индивидуально изменяет цвет сообщений в чате, и другого текста на сервере лично для игрока.
Коды цветов: https://ru.minecraft.wiki/w/Форматирование_текста

`/clearchat`

```
/clearchat
``` 
Очищает все сообщения в чате (только себе)


`/chatsettings`
```
/chatsettings
```
Открывает настройки сообщений чата. <br />
Вы можете отключить уведомления нажав на тип сообщения/команды и подтвердив настройку внизу чата 

После этого настройки нужно сохранить командой:
```
/chatsettings save
```

## Игнор сообщений
`/ignore <ник игрока>`
```
/ignore
```
Оправить игрока в игнор. Вы не будете видеть сообщений игрока.

`/ignorelist`
```
/ignorelist
```
Список игнорируемых игроков

Чтобы убрать игрока из игнора нажмите крестик


## Оффлайн Почта
`/mail <ник игрока> \[сообщение]`
```
/mail
```
Отправляет личное сообщение оффлайн игроку. Сообщение отобразится при входе игроком на сервер.

При отправке самому себе отобразится как \[Заметка]

`/clearmail <ник игрока> \[число]`
```
/clearmail
```
\[число] - индекс/порядковый номер отправленного сообщения
Удаляет отправленные и непрочитанные оффлайн сообщения игроку.

## Развлечения
`/try \[сообщение]`
```
/try 
```
Узнать процент успеха действия в сообщении (рандом)


`/ball \[сообщение]`
```
/ball 
```
*Магический Шар* который рандомно отвечает на ваш вопрос (сообщение)


`/tictactoe <ник игрока>`
```
/tictactoe
```
Позволяет играть в крестики нолики с указанным игроком


`/dice \[количество кубиков  1-6]`
```
/dice
```
Позволяет кинуть от 1 до 6 кубиков в чате

`/spit`
```
/spit
```
Плюнуть в игрока
При попадании игроку высвечивается сообщение

## Дополнительно

`/helper \[сообщение]`
```
/helper
```
Позвать на помощь хелпера / админа

`/lastonline <ник  игрока>`
```
/lastonline
```
Посмотреть когда игрок был на сервере последний раз

`/mark \[цвет]`
```
/mark
```
\[цвет] - Опционально, можно выбрать цвет обводки
Установить временную метку на блок на который смотришь

`/afk`
```
/afk
```
Отправляет вас в режим АФК. Вы так-же перейдете в режим АФК если будете долго стоять на месте.
Подвигайтесь чтобы выйти из АФК режима.