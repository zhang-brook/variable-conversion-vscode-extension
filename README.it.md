[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · **Italiano** · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.compressed.png" width="128" alt="Logo di Conversione variabili">
</p>

<h1 align="center">Conversione variabili</h1>

<p align="center"><em>Una potente estensione per VS Code per la conversione di nomi di variabili e stili di percorso</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Supporta la conversione con un clic e la conversione ciclica e può essere utilizzata tramite il menu contestuale, le scorciatoie da tastiera, la barra di stato e altro ancora.

- ✅ Supporto per selezioni multiple
- ✅ Supporto per più finestre dell'editor
- ✅ Supporto per annulla e ripristina (Ctrl + Z / Ctrl + Y)
- ✅ Abilita solo i formati di conversione di destinazione che ti servono

## Come si usa

### Conversione ciclica

Seleziona nell'editor il testo da convertire, quindi premi `Ctrl + Alt + [` o `Ctrl + Alt + ]` per scorrere le convenzioni di denominazione disponibili.

![](image/cyclic-conversion.gif)

### Conversione di base

**1. Seleziona il testo da convertire**

![Passaggio 1: seleziona il testo da convertire](image/step1-select-the-text-to-convert.gif)

**2. Premi `Shift + Alt + T`**

![Passaggio 2: premi Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Oppure fai clic sul pulsante `Conversione variabili` nella barra di stato.

![Passaggio 2: premi il pulsante della barra di stato](image/step2-press-status-bar-button.png)

Oppure fai clic con il pulsante destro del mouse → `Conversione variabili`.

![Passaggio 2: conversione variabili nel menu contestuale](image/step2-variable-conversion-on-context-menu.png)

Oppure fai clic con il pulsante destro del mouse sul testo selezionato → `Converti variabile in...`.

![Passaggio 2: clic con il pulsante destro sul testo selezionato](image/step2-right-click-on-the-selected-text.gif)

**3. Seleziona la destinazione della conversione** — e il gioco è fatto.

### Conversione percorsi (Beta)

> Questa funzionalità è ancora in versione Beta. Se riscontri problemi, faccelo sapere tramite i contatti indicati alla fine di questo documento.

La conversione dei percorsi funziona allo stesso modo della conversione delle variabili — tramite il menu contestuale, la barra di stato o le scorciatoie da tastiera. L'unica differenza sono le scorciatoie:

- Stile percorso successivo: `Ctrl + Alt + /`
- Stile percorso precedente: `Ctrl + Alt + Shift + /`

![Conversione percorsi](image/path-conversion.gif)

**Nota:** per ora sono supportati solo i percorsi in stile Windows e in stile Unix, quindi al momento entrambe le scorciatoie hanno lo stesso effetto. Sono previsti altri stili di percorso (ad es. lo stile Windows Git Bash, il protocollo `file://` del browser).

## Scorciatoie da tastiera

| Funzionalità                                    | Scorciatoia            |
| ----------------------------------------------- | ---------------------- |
| Selezione rapida di Conversione variabili       | Shift + Alt + T        |
| Conversione ciclica variabili → precedente      | Ctrl + Alt + [         |
| Conversione ciclica variabili → successiva      | Ctrl + Alt + ]         |
| Mostra finestra informativa sull'ordine dei formati | Ctrl + Alt + \`    |
| Selezione rapida di Conversione percorsi        | Shift + Alt + /        |
| Conversione ciclica percorsi → precedente       | Ctrl + Alt + /         |
| Conversione ciclica percorsi → successiva       | Ctrl + Shift + Alt + / |

> Se queste scorciatoie non ti soddisfano, puoi personalizzarle in VS Code tramite l'icona a forma di ingranaggio ⚙ in basso a sinistra → Scorciatoie da tastiera.

## Configurazione

| Chiave di configurazione                | Descrizione                                                    | Esempio                                                          | Valore predefinito |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------ |
| `variable-conversion.enabledFormats`    | Abilita o disabilita le convenzioni di denominazione delle variabili. | `{ "xxxCase.enabled": boolean, ... }`                            | Vedi impostazioni |
| `variable-conversion.formatOrder`       | Configura l'ordine di visualizzazione delle convenzioni di denominazione delle variabili. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Vedi impostazioni |
| `variable-conversion.enabledPathFormats` | Abilita o disabilita i formati di percorso.                   | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Vedi impostazioni |

Panoramica delle impostazioni:

<table>
  <tr>
    <td align="center"><strong>Formati abilitati</strong></td>
    <td align="center"><strong>Ordine dei formati</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Formati abilitati"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Ordine dei formati"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Formati di percorso abilitati</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Formati di percorso abilitati"></td>
  </tr>
</table>

## Stili supportati

### Conversione variabili

| Stile                    | Esempio          |
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

### Conversione percorsi

Stili di percorso supportati:

| Stile         | Esempio                                        |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

Stili di percorso previsti:

| Stile                             | Esempio                               |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## Suggerimenti

#### Informazioni sulle selezioni di testo

- Tieni premuto `Alt`, quindi seleziona più aree con il mouse.
- Tieni premuto `Shift + Alt`, premi il pulsante sinistro del mouse e trascina sul blocco che desideri selezionare.
- Premi `Ctrl + D` per selezionare la parola sotto il cursore.

## Feedback

Se hai suggerimenti per migliorare questa estensione o trovi un bug, [apri una issue su GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). I feedback in inglese o in cinese sono benvenuti. Evita la traduzione automatica, in modo che le descrizioni restino chiare.

## Open Source e contributi

Questa estensione è open source con licenza MIT License. I pull request sono benvenuti per renderla ancora migliore!

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Mirror Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Buon divertimento!**
