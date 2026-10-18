[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · **Magyar**

<p align="center">
  <img src="image/logo.png" width="128" alt="A Változóátalakítás bővítmény logója">
</p>

<h1 align="center">Változóátalakítás</h1>

<p align="center"><em>Hatékony változónév- és útvonalstílus-átalakító bővítmény VS Code-hoz</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Támogatja az egygombos és a ciklikus átalakítást, és használható a helyi menün, a gyorsbillentyűkön, az állapotsávon és egyéb módokon keresztül.

- ✅ Több kijelölés támogatása
- ✅ Több szerkesztőablak támogatása
- ✅ Visszavonás és ismétlés támogatása (Ctrl + Z / Ctrl + Y)
- ✅ Csak a szükséges cél-átalakítási formátumok engedélyezése

## Használat

### Ciklikus átalakítás

Jelölje ki a szerkesztőben az átalakítani kívánt szöveget, majd a `Ctrl + Alt + [` vagy `Ctrl + Alt + ]` billentyűkkel váltson az elérhető elnevezési konvenciók között.

![](image/cyclic-conversion.gif)

### Alapvető átalakítás

**1. Jelölje ki az átalakítani kívánt szöveget**

![1. lépés: Jelölje ki az átalakítani kívánt szöveget](image/step1-select-the-text-to-convert.gif)

**2. Nyomja meg a `Shift + Alt + T` billentyűkombinációt**

![2. lépés: Nyomja meg a Shift + Alt + T billentyűkombinációt](image/step2-press-shift-alt-t.gif)

Vagy kattintson az állapotsáv `Változóátalakítás` gombjára.

![2. lépés: Kattintson az állapotsáv gombjára](image/step2-press-status-bar-button.png)

Vagy kattintson a jobb gombbal → `Változóátalakítás`.

![2. lépés: Változóátalakítás a helyi menüben](image/step2-variable-conversion-on-context-menu.png)

Vagy kattintson a jobb gombbal a kijelölt szövegre → `Változó átalakítása...`.

![2. lépés: Kattintson a jobb gombbal a kijelölt szövegre](image/step2-right-click-on-the-selected-text.gif)

**3. Válassza ki az átalakítás célját** — és kész is.

### Útvonalátalakítás (Beta)

> Ez a funkció még Beta fázisban van. Ha bármilyen problémába ütközik, kérjük, jelezze a dokumentum végén található elérhetőségek egyikén.

Az útvonalátalakítás ugyanúgy működik, mint a változóátalakítás — a helyi menün, az állapotsávon vagy a gyorsbillentyűkön keresztül. Az egyetlen különbség a gyorsbillentyűk:

- Következő útvonalstílus: `Ctrl + Alt + /`
- Előző útvonalstílus: `Ctrl + Alt + Shift + /`

![Útvonalátalakítás](image/path-conversion.gif)

**Megjegyzés:** Egyelőre csak a Windows stílusú és a Unix stílusú útvonalak támogatottak, így mindkét gyorsbillentyű jelenleg ugyanazt teszi. További útvonalstílusok vannak tervben (pl. Windows Git Bash stílus, böngésző `file://` protokollja).

## Gyorsbillentyűk

| Funkció                                             | Gyorsbillentyű         |
| --------------------------------------------------- | ---------------------- |
| Változóátalakítás gyorsválasztó                      | Shift + Alt + T        |
| Változók ciklikus átalakítása → előző                | Ctrl + Alt + [         |
| Változók ciklikus átalakítása → következő           | Ctrl + Alt + ]         |
| Formátumsorrend-információs párbeszédablak megjelenítése | Ctrl + Alt + \`    |
| Útvonalátalakítás gyorsválasztó                      | Shift + Alt + /        |
| Útvonalak ciklikus átalakítása → előző               | Ctrl + Alt + /         |
| Útvonalak ciklikus átalakítása → következő          | Ctrl + Shift + Alt + / |

> Ha ezek a gyorsbillentyűk nem felelnek meg Önnek, testreszabhatja őket a VS Code-ban a bal alsó sarokban lévő fogaskerék ikon ⚙ → Gyorsbillentyűk menüpontban.

## Beállítások

| Beállításkulcs                          | Leírás                                                          | Példa                                                            | Alapértelmezett |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ |
| `variable-conversion.enabledFormats`    | Változóelnevezési konvenciók engedélyezése vagy letiltása.      | `{ "xxxCase.enabled": boolean, ... }`                            | Lásd a beállításokat |
| `variable-conversion.formatOrder`       | A változóelnevezési konvenciók megjelenítési sorrendjének beállítása. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Lásd a beállításokat |
| `variable-conversion.enabledPathFormats` | Útvonalformátumok engedélyezése vagy letiltása.                | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Lásd a beállításokat |

A beállítások áttekintése:

<table>
  <tr>
    <td align="center"><strong>Engedélyezett formátumok</strong></td>
    <td align="center"><strong>Formátumsorrend</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Enabled Formats"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Format Order"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Engedélyezett útvonalformátumok</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Enabled Path Formats"></td>
  </tr>
</table>

## Támogatott formátumok

### Változóátalakítás

| Elnevezési konvenció     | Példa            |
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

### Útvonalátalakítás

Támogatott útvonalstílusok:

| Stílus         | Példa                                          |
| ------------- | ---------------------------------------------- |
| Windows stílus | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix stílus    | `/usr/bin`<br />`./public/assets/`             |

Tervezett útvonalstílusok:

| Stílus                                        | Példa                                 |
| --------------------------------- | ------------------------------------- |
| Windows stílus (escape-elt fordított perjel)  | `C:\\Windows\\System32`               |
| Unix stílus (escape-elt perjel)               | `\/usr\/bin`                          |
| Windows Git Bash stílus                       | `/c/Windows/System32`                 |
| Böngésző `file://` protokoll                  | `file:///C:/Program%20Files%20(x86)/` |

## Tippek

#### A szövegkijelölésről

- Tartsa lenyomva az `Alt` billentyűt, majd jelöljön ki több területet az egérrel.
- Tartsa lenyomva a `Shift + Alt` billentyűkombinációt, nyomja le a bal egérgombot, és húzza át a kijelölni kívánt blokkot.
- Nyomja meg a `Ctrl + D` billentyűkombinációt a kurzor alatti szó kijelöléséhez.

## Visszajelzés

Ha javaslatai vannak a bővítmény fejlesztésével kapcsolatban, vagy hibát talál, kérjük, [nyisson egy issue-t a GitHubon](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Szívesen fogadjuk az angol, 简体中文 vagy 繁體中文 nyelvű visszajelzéseket. Kérjük, kerülje a gépi fordítást, hogy a leírások érthetőek maradjanak.

## Nyílt forráskód és közreműködés

Ez a bővítmény MIT License alatt nyílt forráskódú. Szívesen fogadunk pull requesteket, hogy még jobb legyen!

GitHub-tároló: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee-tükör: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Jó szórakozást!**
