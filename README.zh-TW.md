[English](README.md) · [简体中文](README.zh-CN.md) · **繁體中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="變數轉換標誌">
</p>

<h1 align="center">變數轉換</h1>

<p align="center"><em>功能強大的 VS Code 變數命名與路徑樣式轉換擴充功能</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

支援一鍵轉換與循環轉換，並可透過右鍵選單、快速鍵、狀態列等多種方式使用。

- ✅ 支援多重選取
- ✅ 支援多個編輯器視窗
- ✅ 支援復原與重做（Ctrl + Z / Ctrl + Y）
- ✅ 可只啟用需要的目標轉換格式

## 使用方式

### 循環轉換

在編輯器中選取要轉換的內容，然後按下 `Ctrl + Alt + [` 或 `Ctrl + Alt + ]`，即可在可用的命名方式之間循環切換。

![](image/cyclic-conversion.gif)

### 基礎轉換

**1. 選取要轉換的文字**

![步驟 1：選取要轉換的文字](image/step1-select-the-text-to-convert.gif)

**2. 按下 `Shift + Alt + T`**

![步驟 2：按下 Shift + Alt + T](image/step2-press-shift-alt-t.gif)

或點選狀態列上的 `變數轉換` 按鈕。

![步驟 2：點選狀態列按鈕](image/step2-press-status-bar-button.png)

或在選取的文字上按一下右鍵 → `變數轉換`。

![步驟 2：右鍵選單中的變數轉換](image/step2-variable-conversion-on-context-menu.png)

或在選取的文字上按一下右鍵 → `將變數轉換為...`。

![步驟 2：在選取的文字上按一下右鍵](image/step2-right-click-on-the-selected-text.gif)

**3. 選擇轉換目標** — 完成轉換。

### 路徑轉換（Beta）

> 此功能仍處於 Beta 階段。若您遇到任何問題，請透過本文件末尾的聯絡資訊告訴我們。

路徑轉換的運作方式與變數轉換相同 — 可透過右鍵選單、狀態列或快速鍵使用。唯一的差別在於快速鍵：

- 下一個路徑樣式：`Ctrl + Alt + /`
- 上一個路徑樣式：`Ctrl + Alt + Shift + /`

![路徑轉換](image/path-conversion.gif)

**注意：** 目前僅支援 Windows 風格與 Unix 風格路徑，因此這兩個快速鍵目前的功能相同。未來計畫支援更多路徑樣式（例如 Windows Git Bash 風格、瀏覽器 `file://` 通訊協定）。

## 快速鍵

| 功能                                 | 快速鍵                 |
| ------------------------------------ | ---------------------- |
| 變數轉換 快速選擇                    | Shift + Alt + T        |
| 變數循環轉換 → 上一個                | Ctrl + Alt + [         |
| 變數循環轉換 → 下一個                | Ctrl + Alt + ]         |
| 顯示格式順序資訊對話方塊             | Ctrl + Alt + \`        |
| 路徑轉換 快速選擇                    | Shift + Alt + /        |
| 路徑循環轉換 → 上一個                | Ctrl + Alt + /         |
| 路徑循環轉換 → 下一個                | Ctrl + Shift + Alt + / |

> 若這些快速鍵不適合您，可在 VS Code 中透過左下角的齒輪圖示 ⚙ → 鍵盤快速鍵自行修改。

## 設定

| 設定項目                                | 說明                                                       | 範例                                                             | 預設值   |
| --------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- | -------- |
| `variable-conversion.enabledFormats`    | 啟用或停用變數命名方式。                                   | `{ "xxxCase.enabled": boolean, ... }`                            | 查看設定 |
| `variable-conversion.formatOrder`       | 設定變數命名方式的顯示順序。                               | `[ "camel_case", "pascal_case", "snake_case" ]`                  | 查看設定 |
| `variable-conversion.enabledPathFormats` | 啟用或停用路徑格式。                                      | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | 查看設定 |

設定概覽：

<table>
  <tr>
    <td align="center"><strong>已啟用的格式</strong></td>
    <td align="center"><strong>格式順序</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="已啟用的格式"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="格式順序"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>已啟用的路徑格式</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="已啟用的路徑格式"></td>
  </tr>
</table>

## 支援的命名方式

### 變數轉換

| 命名方式                 | 範例             |
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

### 路徑轉換

支援的路徑樣式：

| 樣式          | 範例                                           |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

計畫支援的路徑樣式：

| 樣式                              | 範例                                  |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## 小提示

#### 關於文字選取

- 按住 `Alt`，再使用滑鼠選取多個區域。
- 按住 `Shift + Alt`，按下滑鼠左鍵，然後拖曳過要選取的區塊。
- 按下 `Ctrl + D` 可選取游標所在的字組。

## 意見反應

若您對本擴充功能有任何改進建議，或發現錯誤，請[在 GitHub 上開啟 issue](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues)。歡迎使用 English、简体中文或繁體中文提供意見反應。請避免使用機器翻譯，以確保描述清楚易懂。

## 開源與貢獻

本擴充功能以 MIT License 開源。歡迎提交 Pull Request，讓它變得更好！

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee Mirror: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**玩得開心！**
