[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · **Português (Brasil)** · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.compressed.png" width="128" alt="Logotipo da Conversão de Variáveis">
</p>

<h1 align="center">Conversão de Variáveis</h1>

<p align="center"><em>Uma poderosa extensão do VS Code para conversão de estilos de nomes de variáveis e caminhos</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Suporta conversão com uma tecla e conversão cíclica, e pode ser usada pelo menu de contexto, por atalhos de teclado, pela barra de status e muito mais.

- ✅ Suporte a múltiplas seleções
- ✅ Suporte a várias janelas de editor
- ✅ Suporte a desfazer e refazer (Ctrl + Z / Ctrl + Y)
- ✅ Habilite apenas os formatos de conversão de destino que você precisa

## Como usar

### Conversão cíclica

Selecione no editor o que deseja converter e pressione `Ctrl + Alt + [` ou `Ctrl + Alt + ]` para alternar entre as convenções de nomenclatura disponíveis.

![](image/cyclic-conversion.gif)

### Conversão básica

**1. Selecione o texto a ser convertido**

![Etapa 1: Selecione o texto a ser convertido](image/step1-select-the-text-to-convert.gif)

**2. Pressione `Shift + Alt + T`**

![Etapa 2: Pressione Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Ou clique no botão `Conversão de Variáveis` na barra de status.

![Etapa 2: Pressione o botão da barra de status](image/step2-press-status-bar-button.png)

Ou clique com o botão direito → `Conversão de Variáveis`.

![Etapa 2: Conversão de variáveis no menu de contexto](image/step2-variable-conversion-on-context-menu.png)

Ou clique com o botão direito no texto selecionado → `Converter variável em...`.

![Etapa 2: Clique com o botão direito no texto selecionado](image/step2-right-click-on-the-selected-text.gif)

**3. Selecione o destino da conversão** — e pronto.

### Conversão de Caminhos (Beta)

> Este recurso ainda está em Beta. Se você encontrar algum problema, avise-nos pelos dados de contato no final deste documento.

A conversão de caminhos funciona da mesma forma que a conversão de variáveis — pelo menu de contexto, pela barra de status ou por atalhos de teclado. A única diferença são os atalhos:

- Próximo estilo de caminho: `Ctrl + Alt + /`
- Estilo de caminho anterior: `Ctrl + Alt + Shift + /`

![Conversão de Caminhos](image/path-conversion.gif)

**Observação:** Apenas caminhos no estilo Windows e no estilo Unix são suportados por enquanto, então ambos os atalhos fazem a mesma coisa atualmente. Mais estilos de caminho estão planejados (por exemplo, estilo Windows Git Bash, protocolo `file://` do navegador).

## Atalhos de teclado

| Recurso                                                 | Atalho                 |
| ------------------------------------------------------- | ---------------------- |
| Seleção rápida de conversão de variáveis                | Shift + Alt + T        |
| Conversão cíclica de variáveis → anterior               | Ctrl + Alt + [         |
| Conversão cíclica de variáveis → próxima                | Ctrl + Alt + ]         |
| Mostrar diálogo de informações da ordem dos formatos    | Ctrl + Alt + \`        |
| Seleção rápida de conversão de caminhos                 | Shift + Alt + /        |
| Conversão cíclica de caminhos → anterior                | Ctrl + Alt + /         |
| Conversão cíclica de caminhos → próxima                 | Ctrl + Shift + Alt + / |

> Se esses atalhos não forem adequados para você, personalize-os no VS Code pelo ícone de engrenagem ⚙ no canto inferior esquerdo → Atalhos de Teclado.

## Configurações

| Chave de configuração                     | Descrição                                                                          | Exemplo                                                             | Padrão            |
| ----------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------- |
| `variable-conversion.enabledFormats`      | Habilita ou desabilita as convenções de nomenclatura de variáveis.                 | `{ "xxxCase.enabled": boolean, ... }`                               | Ver configurações |
| `variable-conversion.formatOrder`         | Configura a ordem de exibição das convenções de nomenclatura de variáveis.         | `[ "camel_case", "pascal_case", "snake_case" ]`                     | Ver configurações |
| `variable-conversion.enabledPathFormats`  | Habilita ou desabilita os formatos de caminho.                                     | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Ver configurações |

Visão geral das configurações:

<table>
  <tr>
    <td align="center"><strong>Formatos Habilitados</strong></td>
    <td align="center"><strong>Ordem dos Formatos</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Formatos Habilitados"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Ordem dos Formatos"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Formatos de Caminho Habilitados</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Formatos de Caminho Habilitados"></td>
  </tr>
</table>

## Tipos compatíveis

### Conversão de Variáveis

| Caso                     | Exemplo          |
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

### Conversão de Caminhos

Estilos de caminho compatíveis:

| Estilo         | Exemplo                                        |
| -------------- | ---------------------------------------------- |
| Estilo Windows | `C:\Windows\System32` <br />`.\public\assets\` |
| Estilo Unix    | `/usr/bin`<br />`./public/assets/`             |

Estilos de caminho planejados:

| Estilo                                       | Exemplo                               |
| -------------------------------------------- | ------------------------------------- |
| Estilo Windows (barras invertidas escapadas) | `C:\\Windows\\System32`               |
| Estilo Unix (barras invertidas escapadas)    | `\/usr\/bin`                          |
| Estilo Windows Git Bash                      | `/c/Windows/System32`                 |
| Protocolo `file://` do navegador             | `file:///C:/Program%20Files%20(x86)/` |

## Dicas

#### Sobre as seleções de texto

- Mantenha `Alt` pressionado e selecione várias regiões com o mouse.
- Mantenha `Shift + Alt` pressionado, pressione o botão esquerdo do mouse e arraste sobre o bloco que deseja selecionar.
- Pressione `Ctrl + D` para selecionar a palavra sob o cursor.

## Feedback

Se você tiver sugestões para melhorar esta extensão ou encontrar um bug, [abra uma issue no GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Comentários em inglês ou chinês são bem-vindos. Evite tradução automática para que as descrições permaneçam claras.

## Código aberto e contribuição

Esta extensão é de código aberto sob a licença MIT License. Pull requests são bem-vindos para torná-la ainda melhor!

Repositório no GitHub: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Espelho no Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Divirta-se!**
