[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · **Polski** · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.compressed.png" width="128" alt="Logo rozszerzenia Konwersja zmiennych">
</p>

<h1 align="center">Konwersja zmiennych</h1>

<p align="center"><em>Potężne rozszerzenie do konwersji nazewnictwa zmiennych i stylów ścieżek dla VS Code</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Obsługuje konwersję jednym klawiszem i konwersję cykliczną, a korzystać z niej można przez menu kontekstowe, skróty klawiszowe, pasek stanu i inne sposoby.

- ✅ Obsługa wielu zaznaczeń
- ✅ Obsługa wielu okien edytora
- ✅ Obsługa cofania i ponawiania (Ctrl + Z / Ctrl + Y)
- ✅ Włącz tylko te formaty konwersji, których potrzebujesz

## Jak używać

### Konwersja cykliczna

Zaznacz w edytorze tekst do przekonwertowania, a następnie naciśnij `Ctrl + Alt + [` lub `Ctrl + Alt + ]`, aby przełączać się między dostępnymi konwencjami nazewnictwa.

![](image/cyclic-conversion.gif)

### Podstawowa konwersja

**1. Zaznacz tekst do przekonwertowania**

![Krok 1: Zaznacz tekst do przekonwertowania](image/step1-select-the-text-to-convert.gif)

**2. Naciśnij `Shift + Alt + T`**

![Krok 2: Naciśnij Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Możesz też kliknąć przycisk `Konwersja zmiennych` na pasku stanu.

![Krok 2: Kliknij przycisk na pasku stanu](image/step2-press-status-bar-button.png)

Albo kliknij prawym przyciskiem myszy → `Konwersja zmiennych`.

![Krok 2: Konwersja zmiennych w menu kontekstowym](image/step2-variable-conversion-on-context-menu.png)

Albo kliknij prawym przyciskiem myszy zaznaczony tekst → `Konwertuj zmienną na...`.

![Krok 2: Kliknij prawym przyciskiem myszy zaznaczony tekst](image/step2-right-click-on-the-selected-text.gif)

**3. Wybierz cel konwersji** — i gotowe.

### Konwersja ścieżek (Beta)

> Ta funkcja jest nadal w wersji Beta. Jeśli napotkasz jakiekolwiek problemy, daj nam znać, korzystając z informacji kontaktowych na końcu tego dokumentu.

Konwersja ścieżek działa tak samo jak konwersja zmiennych — przez menu kontekstowe, pasek stanu lub skróty klawiszowe. Różnią się tylko skróty:

- Następny styl ścieżki: `Ctrl + Alt + /`
- Poprzedni styl ścieżki: `Ctrl + Alt + Shift + /`

![Konwersja ścieżek](image/path-conversion.gif)

**Uwaga:** Na razie obsługiwane są tylko ścieżki w stylu Windows i Unix, więc oba skróty robią obecnie to samo. Planowane są kolejne style ścieżek (np. styl Windows Git Bash, protokół przeglądarki `file://`).

## Skróty klawiszowe

| Funkcja                                             | Skrót                  |
| --------------------------------------------------- | ---------------------- |
| Szybki wybór konwersji zmiennych                    | Shift + Alt + T        |
| Konwersja cykliczna zmiennych → poprzednia          | Ctrl + Alt + [         |
| Konwersja cykliczna zmiennych → następna            | Ctrl + Alt + ]         |
| Pokaż okno informacji o kolejności formatów         | Ctrl + Alt + \`        |
| Szybki wybór konwersji ścieżek                      | Shift + Alt + /        |
| Konwersja cykliczna ścieżek → poprzednia            | Ctrl + Alt + /         |
| Konwersja cykliczna ścieżek → następna              | Ctrl + Shift + Alt + / |

> Jeśli te skróty Ci nie odpowiadają, możesz je dostosować w VS Code, klikając ikonę zębatki ⚙ w lewym dolnym rogu → Skróty klawiszowe.

## Konfiguracja

| Klucz konfiguracji                      | Opis                                                           | Przykład                                                         | Domyślnie    |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ |
| `variable-conversion.enabledFormats`    | Włącz lub wyłącz konwencje nazewnictwa zmiennych.              | `{ "xxxCase.enabled": boolean, ... }`                            | Zobacz ustawienia |
| `variable-conversion.formatOrder`       | Skonfiguruj kolejność wyświetlania konwencji nazewnictwa zmiennych. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Zobacz ustawienia |
| `variable-conversion.enabledPathFormats` | Włącz lub wyłącz formaty ścieżek.                             | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Zobacz ustawienia |

Przegląd ustawień:

<table>
  <tr>
    <td align="center"><strong>Włączone formaty</strong></td>
    <td align="center"><strong>Kolejność formatów</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Enabled Formats"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Format Order"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Włączone formaty ścieżek</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Enabled Path Formats"></td>
  </tr>
</table>

## Obsługiwane formaty

### Konwersja zmiennych

| Konwencja                | Przykład         |
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

### Konwersja ścieżek

Obsługiwane style ścieżek:

| Styl          | Przykład                                       |
| ------------- | ---------------------------------------------- |
| Styl Windows  | `C:\Windows\System32` <br />`.\public\assets\` |
| Styl Unix     | `/usr/bin`<br />`./public/assets/`             |

Planowane style ścieżek:

| Styl                                          | Przykład                              |
| --------------------------------- | ------------------------------------- |
| Styl Windows (escapowane ukośniki odwrotne)   | `C:\\Windows\\System32`               |
| Styl Unix (escapowane ukośniki)               | `\/usr\/bin`                          |
| Styl Windows Git Bash                         | `/c/Windows/System32`                 |
| Protokół przeglądarki `file://`               | `file:///C:/Program%20Files%20(x86)/` |

## Wskazówki

#### O zaznaczaniu tekstu

- Przytrzymaj `Alt`, a następnie zaznacz myszą kilka obszarów.
- Przytrzymaj `Shift + Alt`, naciśnij lewy przycisk myszy i przeciągnij po bloku, który chcesz zaznaczyć.
- Naciśnij `Ctrl + D`, aby zaznaczyć słowo pod kursorem.

## Opinie

Jeśli masz sugestie dotyczące ulepszenia tego rozszerzenia lub znalazłeś błąd, [otwórz zgłoszenie na GitHubie](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Mile widziane opinie w języku angielskim lub chińskim. Prosimy unikać tłumaczenia maszynowego, aby opisy pozostały czytelne.

## Open source i współtworzenie

To rozszerzenie jest otwartoźródłowe na licencji MIT License. Zapraszamy do przesyłania pull requestów, aby uczynić je jeszcze lepszym!

Repozytorium GitHub: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Kopia lustrzana Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Miłej zabawy!**
