[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · **Русский** · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="Логотип «Преобразование переменных»">
</p>

<h1 align="center">Преобразование переменных</h1>

<p align="center"><em>Мощное расширение VS Code для преобразования стилей именования переменных и путей</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Поддерживает преобразование одним нажатием и циклическое преобразование, а также доступно через контекстное меню, сочетания клавиш, строку состояния и другие способы.

- ✅ Поддержка множественного выделения
- ✅ Поддержка нескольких окон редактора
- ✅ Поддержка отмены и повтора (Ctrl + Z / Ctrl + Y)
- ✅ Можно включить только нужные целевые форматы преобразования

## Как использовать

### Циклическое преобразование

Выделите в редакторе то, что нужно преобразовать, а затем нажмите `Ctrl + Alt + [` или `Ctrl + Alt + ]`, чтобы переключаться между доступными стилями именования.

![](image/cyclic-conversion.gif)

### Базовое преобразование

**1. Выделите текст, который нужно преобразовать**

![Шаг 1: Выделите текст, который нужно преобразовать](image/step1-select-the-text-to-convert.gif)

**2. Нажмите `Shift + Alt + T`**

![Шаг 2: Нажмите Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Или нажмите кнопку `Преобразование переменных` в строке состояния.

![Шаг 2: Нажатие кнопки в строке состояния](image/step2-press-status-bar-button.png)

Или щёлкните правой кнопкой мыши → `Преобразование переменных`.

![Шаг 2: «Преобразование переменных» в контекстном меню](image/step2-variable-conversion-on-context-menu.png)

Или щёлкните правой кнопкой мыши по выделенному тексту → `Преобразовать переменную в...`.

![Шаг 2: Щелчок правой кнопкой мыши по выделенному тексту](image/step2-right-click-on-the-selected-text.gif)

**3. Выберите целевой формат преобразования** — и готово.

### Преобразование путей (Beta)

> Эта функция всё ещё находится в стадии Beta. Если вы столкнётесь с какими-либо проблемами, сообщите о них по контактным данным в конце этого документа.

Преобразование путей работает так же, как преобразование переменных, — через контекстное меню, строку состояния или сочетания клавиш. Отличаются только сочетания клавиш:

- Следующий стиль пути: `Ctrl + Alt + /`
- Предыдущий стиль пути: `Ctrl + Alt + Shift + /`

![Преобразование путей](image/path-conversion.gif)

**Примечание.** Сейчас поддерживаются только пути в стиле Windows и стиле Unix, поэтому оба сочетания клавиш пока выполняют одно и то же. В дальнейшем планируются другие стили путей (например, стиль Windows Git Bash и протокол `file://` в браузере).

## Сочетания клавиш

| Функция                                                | Сочетание клавиш       |
| ------------------------------------------------------ | ---------------------- |
| Быстрый выбор преобразования переменных                | Shift + Alt + T        |
| Циклическое преобразование переменных → предыдущее     | Ctrl + Alt + [         |
| Циклическое преобразование переменных → следующее      | Ctrl + Alt + ]         |
| Показать диалог с информацией о порядке форматов       | Ctrl + Alt + \`        |
| Быстрый выбор преобразования путей                     | Shift + Alt + /        |
| Циклическое преобразование путей → предыдущее          | Ctrl + Alt + /         |
| Циклическое преобразование путей → следующее           | Ctrl + Shift + Alt + / |

> Если эти сочетания клавиш вам не подходят, их можно изменить в VS Code: значок шестерёнки ⚙ в левом нижнем углу → Сочетания клавиш.

## Настройки

| Ключ настройки                            | Описание                                                             | Пример                                                              | По умолчанию  |
| ----------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------- |
| `variable-conversion.enabledFormats`      | Включает или отключает стили именования переменных.                  | `{ "xxxCase.enabled": boolean, ... }`                               | См. настройки |
| `variable-conversion.formatOrder`         | Настраивает порядок отображения стилей именования переменных.        | `[ "camel_case", "pascal_case", "snake_case" ]`                     | См. настройки |
| `variable-conversion.enabledPathFormats`  | Включает или отключает форматы путей.                                | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | См. настройки |

Обзор настроек:

<table>
  <tr>
    <td align="center"><strong>Включённые форматы</strong></td>
    <td align="center"><strong>Порядок форматов</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Включённые форматы"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Порядок форматов"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Включённые форматы путей</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Включённые форматы путей"></td>
  </tr>
</table>

## Поддерживаемые регистры

### Преобразование переменных

| Регистр                  | Пример           |
| ------------------------ | ---------------- |
| Camel Case               | fooBar           |
| Pascal Case              | FooBar           |
| Snake Case               | foo_bar          |
| Snake Camel Case         | foo_Bar          |
| Snake Pascal Case        | Foo_Bar          |
| Snake Upper Case         | FOO_BAR          |
| Kebab Case / Spinal Case | foo-bar          |
| Kebab Camel Case         | foo-Bar          |
| Kebab Pascal Case        | Foo-Bar          |
| Kebab Upper Case         | FOO-BAR          |
| Space Case               | foo bar          |
| Space Camel Case         | foo Bar          |
| Space Pascal Case        | Foo Bar          |
| Space Upper Case         | FOO BAR          |
| Dot Case                 | foo.bar          |
| Dot Camel Case           | foo.Bar          |
| Dot Pascal Case          | Foo.Bar          |
| Dot Upper Case           | FOO.BAR          |
| Lower Case               | foo_bar / foobar |
| Upper Case               | FOO_BAR / FOOBAR |

### Преобразование путей

Поддерживаемые стили путей:

| Стиль          | Пример                                         |
| -------------- | ---------------------------------------------- |
| Стиль Windows  | `C:\Windows\System32` <br />`.\public\assets\` |
| Стиль Unix     | `/usr/bin`<br />`./public/assets/`             |

Планируемые стили путей:

| Стиль                                        | Пример                                |
| -------------------------------------------- | ------------------------------------- |
| Стиль Windows (экранированные обратные слэши) | `C:\\Windows\\System32`               |
| Стиль Unix (экранированные обратные слэши)    | `\/usr\/bin`                          |
| Стиль Windows Git Bash                       | `/c/Windows/System32`                 |
| Протокол `file://` в браузере                | `file:///C:/Program%20Files%20(x86)/` |

## Советы

#### О выделении текста

- Удерживая `Alt`, выделите несколько областей мышью.
- Удерживая `Shift + Alt`, нажмите левую кнопку мыши и проведите по нужному блоку, чтобы выделить его.
- Нажмите `Ctrl + D`, чтобы выделить слово под курсором.

## Обратная связь

Если у вас есть предложения по улучшению этого расширения или вы нашли ошибку, [создайте issue на GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Отзывы на английском или китайском языке приветствуются. Пожалуйста, не используйте машинный перевод, чтобы описания оставались понятными.

## Открытый исходный код и участие

Это расширение имеет открытый исходный код под лицензией MIT License. Мы будем рады pull request, которые помогут сделать его ещё лучше!

Репозиторий GitHub: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Зеркало Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Приятной работы!**
