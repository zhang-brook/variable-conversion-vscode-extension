[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **Deutsch** · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="Logo der Variablenkonvertierung">
</p>

<h1 align="center">Variablenkonvertierung</h1>

<p align="center"><em>Eine leistungsstarke Erweiterung für VS Code zur Konvertierung von Variablennamen und Pfadstilen</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Unterstützt die Ein-Klick-Konvertierung und die zyklische Konvertierung und kann über das Kontextmenü, Tastenkürzel, die Statusleiste und vieles mehr verwendet werden.

- ✅ Unterstützung mehrerer Auswahlen
- ✅ Unterstützung mehrerer Editorfenster
- ✅ Unterstützung für Rückgängig & Wiederholen (Ctrl + Z / Ctrl + Y)
- ✅ Nur die benötigten Ziel-Konvertierungsformate aktivieren

## Verwendung

### Zyklische Konvertierung

Wählen Sie den Text, den Sie konvertieren möchten, im Editor aus, und drücken Sie dann `Ctrl + Alt + [` oder `Ctrl + Alt + ]`, um zwischen den verfügbaren Namenskonventionen zu wechseln.

![](image/cyclic-conversion.gif)

### Grundlegende Konvertierung

**1. Wählen Sie den zu konvertierenden Text aus**

![Schritt 1: Wählen Sie den zu konvertierenden Text aus](image/step1-select-the-text-to-convert.gif)

**2. Drücken Sie `Shift + Alt + T`**

![Schritt 2: Drücken Sie Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Oder klicken Sie in der Statusleiste auf die Schaltfläche `Variablenkonvertierung`.

![Schritt 2: Schaltfläche in der Statusleiste drücken](image/step2-press-status-bar-button.png)

Oder Rechtsklick → `Variablenkonvertierung`.

![Schritt 2: Variablenkonvertierung im Kontextmenü](image/step2-variable-conversion-on-context-menu.png)

Oder Rechtsklick auf den ausgewählten Text → `Variable konvertieren in...`.

![Schritt 2: Rechtsklick auf den ausgewählten Text](image/step2-right-click-on-the-selected-text.gif)

**3. Wählen Sie das Konvertierungsziel aus** – und schon sind Sie fertig.

### Pfadkonvertierung (Beta)

> Diese Funktion befindet sich noch in der Beta-Phase. Sollten Sie auf Probleme stoßen, teilen Sie uns dies bitte über die Kontaktangaben am Ende dieses Dokuments mit.

Die Pfadkonvertierung funktioniert genau wie die Variablenkonvertierung – über das Kontextmenü, die Statusleiste oder Tastenkürzel. Der einzige Unterschied sind die Tastenkürzel:

- Nächster Pfadstil: `Ctrl + Alt + /`
- Vorheriger Pfadstil: `Ctrl + Alt + Shift + /`

![Pfadkonvertierung](image/path-conversion.gif)

**Hinweis:** Vorerst werden nur Pfade im Windows-Stil und im Unix-Stil unterstützt, daher bewirken beide Tastenkürzel derzeit dasselbe. Weitere Pfadstile sind geplant (z. B. Windows-Git-Bash-Stil, Browser-`file://`-Protokoll).

## Tastenkürzel

| Funktion                                   | Tastenkürzel           |
| ------------------------------------------ | ---------------------- |
| Schnellauswahl für Variablenkonvertierung  | Shift + Alt + T        |
| Zyklische Variablenkonvertierung → vorherige | Ctrl + Alt + [       |
| Zyklische Variablenkonvertierung → nächste | Ctrl + Alt + ]         |
| Dialog mit Formatreihenfolge anzeigen      | Ctrl + Alt + \`        |
| Schnellauswahl für Pfadkonvertierung       | Shift + Alt + /        |
| Zyklische Pfadkonvertierung → vorherige    | Ctrl + Alt + /         |
| Zyklische Pfadkonvertierung → nächste      | Ctrl + Shift + Alt + / |

> Wenn Ihnen diese Tastenkürzel nicht zusagen, können Sie sie in VS Code über das Zahnradsymbol ⚙ unten links → Tastaturkurzbefehle anpassen.

## Konfiguration

| Konfigurationsschlüssel                     | Beschreibung                                                   | Beispiel                                                         | Standardwert        |
| ------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------- |
| `variable-conversion.enabledFormats`        | Aktivieren oder deaktivieren Sie Variablen-Namenskonventionen. | `{ "xxxCase.enabled": boolean, ... }`                            | Siehe Einstellungen |
| `variable-conversion.formatOrder`           | Konfigurieren Sie die Anzeigereihenfolge der Variablen-Namenskonventionen. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Siehe Einstellungen |
| `variable-conversion.enabledPathFormats`    | Aktivieren oder deaktivieren Sie Pfadformate.                  | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Siehe Einstellungen |

Einstellungsübersicht:

<table>
  <tr>
    <td align="center"><strong>Aktivierte Formate</strong></td>
    <td align="center"><strong>Formatreihenfolge</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Aktivierte Formate"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Formatreihenfolge"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Aktivierte Pfadformate</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Aktivierte Pfadformate"></td>
  </tr>
</table>

## Unterstützte Schreibweisen

### Variablenkonvertierung

| Schreibweise             | Beispiel         |
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

### Pfadkonvertierung

Unterstützte Pfadstile:

| Stil          | Beispiel                                       |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

Geplante Pfadstile:

| Stil                              | Beispiel                              |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## Tipps

#### Zu Textauswahlen

- Halten Sie `Alt` gedrückt und wählen Sie mehrere Bereiche mit der Maus aus.
- Halten Sie `Shift + Alt` gedrückt, klicken Sie mit der linken Maustaste und ziehen Sie über den Block, den Sie auswählen möchten.
- Drücken Sie `Ctrl + D`, um das Wort unter dem Cursor auszuwählen.

## Feedback

Wenn Sie Vorschläge zur Verbesserung dieser Erweiterung haben oder einen Fehler finden, [eröffnen Sie bitte ein Issue auf GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Feedback auf Englisch oder Chinesisch ist willkommen. Bitte vermeiden Sie maschinelle Übersetzungen, damit die Beschreibungen verständlich bleiben.

## Open Source & Mitwirken

Diese Erweiterung ist Open Source unter der MIT License. Pull Requests sind willkommen, um sie noch besser zu machen!

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee Mirror: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Viel Spaß!**
