**English** · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="Variable Conversion logo">
</p>

<h1 align="center">Variable Conversion</h1>

<p align="center"><em>A powerful variable naming and path style conversion extension for VS Code</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Supports one-key conversion and cyclic conversion, and can be used through the context menu, keyboard shortcuts, the status bar, and more.

- ✅ Multi-selection support
- ✅ Multiple editor windows support
- ✅ Undo & redo support (Ctrl + Z / Ctrl + Y)
- ✅ Enable only the target conversion formats you need

## How to Use

### Cyclic conversion

Select what you want to convert in the editor, then press `Ctrl + Alt + [` or `Ctrl + Alt + ]` to cycle through the available naming conventions.

![](image/cyclic-conversion.gif)

### Basic conversion

**1. Select the text to convert**

![Step 1: Select the text to convert](image/step1-select-the-text-to-convert.gif)

**2. Press `Shift + Alt + T`**

![Step 2: Press Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Or click the `Variable Conversion` button in the status bar.

![Step 2: Press status bar button](image/step2-press-status-bar-button.png)

Or right-click → `Variable Conversion`.

![Step 2: Variable conversion on the context menu](image/step2-variable-conversion-on-context-menu.png)

Or right-click on the selected text → `Convert string to...`.

![Step 2: Right-click on the selected text](image/step2-right-click-on-the-selected-text.gif)

**3. Select the conversion target** — and you're done.

### Path Conversion (Beta)

> This feature is still in Beta. If you encounter any problems, please let us know via the contact information at the end of this document.

Path conversion works the same way as variable conversion — through the context menu, the status bar, or keyboard shortcuts. The only difference is the shortcuts:

- Next path style: `Ctrl + Alt + /`
- Previous path style: `Ctrl + Alt + Shift + /`

![Path Conversion](image/path-conversion.gif)

**Note:** Only Windows-style and Unix-style paths are supported for now, so both shortcuts currently do the same thing. More path styles are planned (e.g. Windows Git Bash style, browser `file://` protocol).

## Shortcut key

| Feature                                             | Shortcut               |
| --------------------------------------------------- | ---------------------- |
| Variable conversion QuickPick                       | Shift + Alt + T        |
| Variable cyclic conversion → previous               | Ctrl + Alt + [         |
| Variable cyclic conversion → next                   | Ctrl + Alt + ]         |
| Show format order info dialog                       | Ctrl + Alt + \`        |
| Path conversion QuickPick                           | Shift + Alt + /        |
| Path cyclic conversion → previous                   | Ctrl + Alt + /         |
| Path cyclic conversion → next                       | Ctrl + Shift + Alt + / |

> If these shortcuts don't suit you, you can customize them in VS Code via the gear icon ⚙ in the lower-left corner → Keyboard Shortcuts.

## Configurations

| Configuration Key                       | Description                                                    | Example                                                          | Default      |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ |
| `variable-conversion.enabledFormats`    | Enable or disable variable naming conventions.                 | `{ "xxxCase.enabled": boolean, ... }`                            | See settings |
| `variable-conversion.formatOrder`       | Configure the display order of variable naming conventions.    | `[ "camel_case", "pascal_case", "snake_case" ]`                  | See settings |
| `variable-conversion.enabledPathFormats` | Enable or disable path formats.                               | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | See settings |

Settings overview:

<table>
  <tr>
    <td align="center"><strong>Enabled Formats</strong></td>
    <td align="center"><strong>Format Order</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Enabled Formats"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Format Order"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Enabled Path Formats</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Enabled Path Formats"></td>
  </tr>
</table>

## Supported Cases

### Variable Conversion

| Case                     | Example          |
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

### Path Conversion

Supported path styles:

| Style         | Example                                        |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

Planned path styles:

| Style                             | Example                               |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## Tips

#### About text selections

- Hold `Alt`, then select multiple regions with the mouse.
- Hold `Shift + Alt`, press the left mouse button, and drag over the block you want to select.
- Press `Ctrl + D` to select the word under the cursor.

## Feedback

If you have suggestions for improving this extension, or find a bug, please [open an issue on GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Feedback in English, 简体中文, or 繁體中文 is welcome. Please avoid machine translation so descriptions stay clear.

## Open Source & Contribute

This extension is open source under the MIT License. Pull requests are welcome to make it even better!

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee Mirror: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Enjoy!**
