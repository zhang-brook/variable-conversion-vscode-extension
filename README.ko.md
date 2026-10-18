[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · **한국어** · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="변수 변환 로고">
</p>

<h1 align="center">변수 변환</h1>

<p align="center"><em>VS Code를 위한 강력한 변수 이름 및 경로 스타일 변환 확장</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

원클릭 변환과 순환 변환을 지원하며, 상황에 맞는 메뉴, 키보드 단축키, 상태 표시줄 등 다양한 방법으로 사용할 수 있습니다.

- ✅ 다중 선택 지원
- ✅ 여러 편집기 창 지원
- ✅ 실행 취소 & 다시 실행 지원 (Ctrl + Z / Ctrl + Y)
- ✅ 필요한 대상 변환 형식만 활성화 가능

## 사용 방법

### 순환 변환

편집기에서 변환할 내용을 선택한 다음 `Ctrl + Alt + [` 또는 `Ctrl + Alt + ]`를 누르면 사용 가능한 명명 규칙 사이를 순환할 수 있습니다.

![](image/cyclic-conversion.gif)

### 기본 변환

**1. 변환할 텍스트 선택**

![1단계: 변환할 텍스트 선택](image/step1-select-the-text-to-convert.gif)

**2. `Shift + Alt + T` 누르기**

![2단계: Shift + Alt + T 누르기](image/step2-press-shift-alt-t.gif)

또는 상태 표시줄의 `변수 변환` 버튼을 클릭합니다.

![2단계: 상태 표시줄 버튼 누르기](image/step2-press-status-bar-button.png)

또는 마우스 오른쪽 버튼 클릭 → `변수 변환`.

![2단계: 상황에 맞는 메뉴의 변수 변환](image/step2-variable-conversion-on-context-menu.png)

또는 선택한 텍스트를 마우스 오른쪽 버튼으로 클릭 → `변수를 다음으로 변환...`.

![2단계: 선택한 텍스트를 마우스 오른쪽 버튼으로 클릭](image/step2-right-click-on-the-selected-text.gif)

**3. 변환 대상 선택** — 완료되었습니다.

### 경로 변환 (베타)

> 이 기능은 아직 베타 단계입니다. 문제가 발생하면 이 문서 끝의 연락처를 통해 알려 주세요.

경로 변환은 변수 변환과 동일한 방식으로 작동합니다 — 상황에 맞는 메뉴, 상태 표시줄 또는 키보드 단축키를 통해 사용할 수 있습니다. 유일한 차이는 단축키입니다:

- 다음 경로 스타일: `Ctrl + Alt + /`
- 이전 경로 스타일: `Ctrl + Alt + Shift + /`

![경로 변환](image/path-conversion.gif)

**참고:** 현재 Windows 스타일과 Unix 스타일 경로만 지원하므로 두 단축키는 현재 동일한 작업을 수행합니다. 더 많은 경로 스타일이 추가될 예정입니다 (예: Windows Git Bash 스타일, 브라우저 `file://` 프로토콜).

## 단축키

| 기능                              | 단축키                 |
| --------------------------------- | ---------------------- |
| 변수 변환 빠른 선택               | Shift + Alt + T        |
| 변수 순환 변환 → 이전             | Ctrl + Alt + [         |
| 변수 순환 변환 → 다음             | Ctrl + Alt + ]         |
| 형식 순서 정보 대화 상자 표시     | Ctrl + Alt + \`        |
| 경로 변환 빠른 선택               | Shift + Alt + /        |
| 경로 순환 변환 → 이전             | Ctrl + Alt + /         |
| 경로 순환 변환 → 다음             | Ctrl + Shift + Alt + / |

> 이러한 단축키가 맞지 않으면 VS Code 왼쪽 아래의 톱니바퀴 아이콘 ⚙ → 키보드 바로 가기에서 사용자 지정할 수 있습니다.

## 설정

| 설정 키                                 | 설명                                                       | 예                                                               | 기본값     |
| --------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| `variable-conversion.enabledFormats`    | 변수 명명 규칙을 활성화하거나 비활성화합니다.              | `{ "xxxCase.enabled": boolean, ... }`                            | 설정 참조 |
| `variable-conversion.formatOrder`       | 변수 명명 규칙의 표시 순서를 설정합니다.                   | `[ "camel_case", "pascal_case", "snake_case" ]`                  | 설정 참조 |
| `variable-conversion.enabledPathFormats` | 경로 형식을 활성화하거나 비활성화합니다.                  | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | 설정 참조 |

설정 개요:

<table>
  <tr>
    <td align="center"><strong>활성화된 형식</strong></td>
    <td align="center"><strong>형식 순서</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="활성화된 형식"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="형식 순서"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>활성화된 경로 형식</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="활성화된 경로 형식"></td>
  </tr>
</table>

## 지원되는 케이스

### 변수 변환

| 케이스                   | 예               |
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

### 경로 변환

지원되는 경로 스타일:

| 스타일        | 예                                             |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

계획된 경로 스타일:

| 스타일                            | 예                                    |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## 팁

#### 텍스트 선택 정보

- `Alt`를 누른 상태에서 마우스로 여러 영역을 선택합니다.
- `Shift + Alt`를 누른 상태에서 마우스 왼쪽 버튼을 누르고 선택할 블록 위로 드래그합니다.
- `Ctrl + D`를 눌러 커서 아래의 단어를 선택합니다.

## 피드백

이 확장의 개선 제안이나 버그를 발견한 경우 [GitHub에서 이슈를 열어 주세요](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). English, 简体中文, 繁體中文로 피드백을 환영합니다. 설명이 명확하게 유지되도록 기계 번역은 피해 주세요.

## 오픈 소스 & 기여

이 확장은 MIT License에 따라 오픈 소스입니다. 더 나은 확장을 위해 Pull Request를 환영합니다!

GitHub Repo: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee Mirror: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**즐겁게 사용하세요!**
