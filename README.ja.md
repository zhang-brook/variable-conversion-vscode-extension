[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="変数変換のロゴ">
</p>

<h1 align="center">変数変換</h1>

<p align="center"><em>VS Code 向けの強力な変数命名とパススタイル変換拡張機能</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

ワンキー変換と循環変換に対応しており、コンテキストメニュー、キーボードショートカット、ステータスバーなどから使用できます。

- ✅ 複数選択に対応
- ✅ 複数のエディターウィンドウに対応
- ✅ 元に戻す & やり直しに対応 (Ctrl + Z / Ctrl + Y)
- ✅ 必要な変換形式だけを有効化可能

## 使用方法

### 循環変換

変換したい内容をエディターで選択し、`Ctrl + Alt + [` または `Ctrl + Alt + ]` を押すと、利用可能な命名規則を循環的に切り替えられます。

![](image/cyclic-conversion.gif)

### 基本的な変換

**1. 変換するテキストを選択**

![ステップ 1: 変換するテキストを選択](image/step1-select-the-text-to-convert.gif)

**2. `Shift + Alt + T` を押す**

![ステップ 2: Shift + Alt + T を押す](image/step2-press-shift-alt-t.gif)

または、ステータスバーの `変数変換` ボタンをクリックします。

![ステップ 2: ステータスバーのボタンを押す](image/step2-press-status-bar-button.png)

または、右クリック → `変数変換`。

![ステップ 2: コンテキストメニューの変数変換](image/step2-variable-conversion-on-context-menu.png)

または、選択したテキストを右クリック → `変数を変換...`。

![ステップ 2: 選択したテキストを右クリック](image/step2-right-click-on-the-selected-text.gif)

**3. 変換先を選択** — これで完了です。

### パス変換 (ベータ)

> この機能はまだベータ版です。問題が発生した場合は、このドキュメントの末尾にある連絡先からお知らせください。

パス変換は変数変換と同じ方法で動作します — コンテキストメニュー、ステータスバー、キーボードショートカットから使用できます。唯一の違いはショートカットです:

- 次のパススタイル: `Ctrl + Alt + /`
- 前のパススタイル: `Ctrl + Alt + Shift + /`

![パス変換](image/path-conversion.gif)

**注意:** 現時点では Windows スタイルと Unix スタイルのパスのみに対応しているため、両方のショートカットは現在同じ動作をします。今後さらに多くのパススタイルを追加する予定です (例: Windows Git Bash スタイル、ブラウザの `file://` プロトコル)。

## ショートカットキー

| 機能                                 | ショートカット         |
| ------------------------------------ | ---------------------- |
| 変数変換 クイック選択                | Shift + Alt + T        |
| 変数循環変換 → 前へ                  | Ctrl + Alt + [         |
| 変数循環変換 → 次へ                  | Ctrl + Alt + ]         |
| フォーマット順序情報ダイアログを表示 | Ctrl + Alt + \`        |
| パス変換 クイック選択                | Shift + Alt + /        |
| パス循環変換 → 前へ                  | Ctrl + Alt + /         |
| パス循環変換 → 次へ                  | Ctrl + Shift + Alt + / |

> これらのショートカットが合わない場合は、VS Code の左下にある歯車アイコン ⚙ → キーボードショートカットからカスタマイズできます。

## 設定

| 設定キー                                | 説明                                                       | 例                                                               | 既定値     |
| --------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| `variable-conversion.enabledFormats`    | 変数の命名規則を有効または無効にします。                   | `{ "xxxCase.enabled": boolean, ... }`                            | 設定を参照 |
| `variable-conversion.formatOrder`       | 変数の命名規則の表示順序を設定します。                     | `[ "camel_case", "pascal_case", "snake_case" ]`                  | 設定を参照 |
| `variable-conversion.enabledPathFormats` | パス形式を有効または無効にします。                        | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | 設定を参照 |

設定の概要:

<table>
  <tr>
    <td align="center"><strong>有効なフォーマット</strong></td>
    <td align="center"><strong>フォーマットの順序</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="有効なフォーマット"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="フォーマットの順序"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>有効なパスフォーマット</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="有効なパスフォーマット"></td>
  </tr>
</table>

## 対応ケース

### 変数変換

| ケース                   | 例               |
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

### パス変換

対応しているパススタイル:

| スタイル      | 例                                             |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

追加予定のパススタイル:

| スタイル                          | 例                                    |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## ヒント

#### テキスト選択について

- `Alt` を押しながら、マウスで複数の範囲を選択します。
- `Shift + Alt` を押しながらマウスの左ボタンを押し、選択したい範囲の上をドラッグします。
- `Ctrl + D` を押すと、カーソル位置の単語を選択できます。

## フィードバック

この拡張機能の改善案やバグを見つけた場合は、[GitHub で issue を開いてください](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues)。英語、中国語でのフィードバックを歓迎します。説明が明確になるよう、機械翻訳は避けてください。

## オープンソース & コントリビュート

この拡張機能は MIT License の下でオープンソースです。Pull Request を歓迎します。一緒に改善していきましょう！

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee Mirror: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**お楽しみください！**
