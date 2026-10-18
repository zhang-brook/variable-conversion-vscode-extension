[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · **Čeština** · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="Logo rozšíření Převod proměnných">
</p>

<h1 align="center">Převod proměnných</h1>

<p align="center"><em>Výkonné rozšíření pro VS Code pro převod stylů názvů proměnných a cest</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Podporuje převod jedním stiskem klávesy i cyklický převod a lze jej používat prostřednictvím kontextové nabídky, klávesových zkratek, stavového řádku a dalších míst.

- ✅ Podpora více výběrů
- ✅ Podpora více oken editoru
- ✅ Podpora vrácení a opakování (Ctrl + Z / Ctrl + Y)
- ✅ Povolte pouze požadované cílové formáty převodu

## Jak používat

### Cyklický převod

Vyberte v editoru text, který chcete převést, a poté stisknutím `Ctrl + Alt + [` nebo `Ctrl + Alt + ]` procházejte dostupné konvence pojmenování.

![](image/cyclic-conversion.gif)

### Základní převod

**1. Vyberte text, který chcete převést**

![Krok 1: Vyberte text, který chcete převést](image/step1-select-the-text-to-convert.gif)

**2. Stiskněte `Shift + Alt + T`**

![Krok 2: Stiskněte Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Nebo klikněte na tlačítko `Převod proměnných` na stavovém řádku.

![Krok 2: Klikněte na tlačítko na stavovém řádku](image/step2-press-status-bar-button.png)

Nebo klikněte pravým tlačítkem → `Převod proměnných`.

![Krok 2: Převod proměnných v kontextové nabídce](image/step2-variable-conversion-on-context-menu.png)

Nebo klikněte pravým tlačítkem na vybraný text → `Převést proměnnou na...`.

![Krok 2: Klikněte pravým tlačítkem na vybraný text](image/step2-right-click-on-the-selected-text.gif)

**3. Vyberte cílový převod** — a máte hotovo.

### Převod cest (Beta)

> Tato funkce je stále ve fázi Beta. Pokud narazíte na jakékoli problémy, dejte nám prosím vědět prostřednictvím kontaktních údajů na konci tohoto dokumentu.

Převod cest funguje stejně jako převod proměnných — prostřednictvím kontextové nabídky, stavového řádku nebo klávesových zkratek. Rozdílné jsou pouze zkratky:

- Další styl cesty: `Ctrl + Alt + /`
- Předchozí styl cesty: `Ctrl + Alt + Shift + /`

![Převod cest](image/path-conversion.gif)

**Poznámka:** Zatím jsou podporovány pouze cesty ve stylu Windows a Unix, takže obě zkratky nyní dělají totéž. Plánujeme další styly cest (např. styl Windows Git Bash, protokol prohlížeče `file://`).

## Klávesové zkratky

| Funkce                                             | Zkratka                |
| --------------------------------------------------- | ---------------------- |
| Rychlý výběr převodu proměnných                     | Shift + Alt + T        |
| Cyklický převod proměnných → předchozí              | Ctrl + Alt + [         |
| Cyklický převod proměnných → další                  | Ctrl + Alt + ]         |
| Zobrazit dialog s informacemi o pořadí formátů       | Ctrl + Alt + \`        |
| Rychlý výběr převodu cest                           | Shift + Alt + /        |
| Cyklický převod cest → předchozí                    | Ctrl + Alt + /         |
| Cyklický převod cest → další                        | Ctrl + Shift + Alt + / |

> Pokud vám tyto zkratky nevyhovují, můžete je v VS Code upravit přes ikonu ozubeného kola ⚙ v levém dolním rohu → Klávesové zkratky.

## Konfigurace

| Klíč konfigurace                        | Popis                                                          | Příklad                                                          | Výchozí      |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ |
| `variable-conversion.enabledFormats`    | Povolte nebo zakažte konvence pojmenování proměnných.          | `{ "xxxCase.enabled": boolean, ... }`                            | Viz nastavení |
| `variable-conversion.formatOrder`       | Nakonfigurujte pořadí zobrazování konvencí pojmenování proměnných. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Viz nastavení |
| `variable-conversion.enabledPathFormats` | Povolte nebo zakažte formáty cest.                            | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Viz nastavení |

Přehled nastavení:

<table>
  <tr>
    <td align="center"><strong>Povolené formáty</strong></td>
    <td align="center"><strong>Pořadí formátů</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Enabled Formats"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Format Order"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Povolené formáty cest</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Enabled Path Formats"></td>
  </tr>
</table>

## Podporované formáty

### Převod proměnných

| Konvence                 | Příklad          |
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

### Převod cest

Podporované styly cest:

| Styl          | Příklad                                        |
| ------------- | ---------------------------------------------- |
| Styl Windows  | `C:\Windows\System32` <br />`.\public\assets\` |
| Styl Unix     | `/usr/bin`<br />`./public/assets/`             |

Plánované styly cest:

| Styl                                 | Příklad                               |
| --------------------------------- | ------------------------------------- |
| Styl Windows (escapované zpětné lomítko) | `C:\\Windows\\System32`           |
| Styl Unix (escapované lomítko)       | `\/usr\/bin`                          |
| Styl Windows Git Bash                | `/c/Windows/System32`                 |
| Protokol prohlížeče `file://`        | `file:///C:/Program%20Files%20(x86)/` |

## Tipy

#### O výběru textu

- Podržte `Alt` a myší vyberte několik oblastí.
- Podržte `Shift + Alt`, stiskněte levé tlačítko myši a přetáhněte přes blok, který chcete vybrat.
- Stisknutím `Ctrl + D` vyberte slovo pod kurzorem.

## Zpětná vazba

Máte-li návrhy na zlepšení tohoto rozšíření nebo jste našli chybu, [otevřete prosím issue na GitHubu](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Vítáme zpětnou vazbu v angličtině, 简体中文 nebo 繁體中文. Vyhněte se prosím strojovému překladu, aby popisy zůstaly srozumitelné.

## Open source a spolupráce

Toto rozšíření je open source pod licencí MIT License. Pull requesty jsou vítány, aby bylo ještě lepší!

Repozitář GitHub: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Zrcadlo Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Příjemnou zábavu!**
