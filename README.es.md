[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Español** · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.compressed.png" width="128" alt="Logotipo de Conversión de variables">
</p>

<h1 align="center">Conversión de variables</h1>

<p align="center"><em>Una potente extensión de VS Code para convertir estilos de nombres de variables y rutas</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Admite conversión con una sola tecla y conversión cíclica, y puede usarse desde el menú contextual, los atajos de teclado, la barra de estado y mucho más.

- ✅ Compatible con selecciones múltiples
- ✅ Compatible con varias ventanas de editor
- ✅ Compatible con deshacer y rehacer (Ctrl + Z / Ctrl + Y)
- ✅ Habilita solo los formatos de conversión de destino que necesites

## Cómo usar

### Conversión cíclica

Selecciona en el editor lo que quieres convertir y, a continuación, pulsa `Ctrl + Alt + [` o `Ctrl + Alt + ]` para recorrer las convenciones de nombres disponibles.

![](image/cyclic-conversion.gif)

### Conversión básica

**1. Selecciona el texto que quieres convertir**

![Paso 1: Selecciona el texto que quieres convertir](image/step1-select-the-text-to-convert.gif)

**2. Pulsa `Shift + Alt + T`**

![Paso 2: Pulsa Shift + Alt + T](image/step2-press-shift-alt-t.gif)

O haz clic en el botón `Conversión de variables` de la barra de estado.

![Paso 2: Pulsa el botón de la barra de estado](image/step2-press-status-bar-button.png)

O haz clic con el botón derecho → `Conversión de variables`.

![Paso 2: Conversión de variables en el menú contextual](image/step2-variable-conversion-on-context-menu.png)

O haz clic con el botón derecho en el texto seleccionado → `Convertir variable a...`.

![Paso 2: Haz clic con el botón derecho en el texto seleccionado](image/step2-right-click-on-the-selected-text.gif)

**3. Selecciona el destino de la conversión** y listo.

### Conversión de rutas (Beta)

> Esta función todavía está en fase Beta. Si encuentras algún problema, avísanos mediante la información de contacto que aparece al final de este documento.

La conversión de rutas funciona igual que la conversión de variables: mediante el menú contextual, la barra de estado o los atajos de teclado. La única diferencia son los atajos:

- Siguiente estilo de ruta: `Ctrl + Alt + /`
- Estilo de ruta anterior: `Ctrl + Alt + Shift + /`

![Conversión de rutas](image/path-conversion.gif)

**Nota:** Por ahora solo se admiten rutas con estilo Windows y estilo Unix, por lo que ambos atajos hacen lo mismo actualmente. Está previsto añadir más estilos de ruta (p. ej. el estilo Windows Git Bash o el protocolo `file://` del navegador).

## Atajos de teclado

| Función                                                | Atajo                  |
| ------------------------------------------------------ | ---------------------- |
| Selector rápido de conversión de variables             | Shift + Alt + T        |
| Conversión cíclica de variables → anterior             | Ctrl + Alt + [         |
| Conversión cíclica de variables → siguiente            | Ctrl + Alt + ]         |
| Mostrar diálogo con información del orden de formatos  | Ctrl + Alt + \`        |
| Selector rápido de conversión de rutas                 | Shift + Alt + /        |
| Conversión cíclica de rutas → anterior                 | Ctrl + Alt + /         |
| Conversión cíclica de rutas → siguiente                | Ctrl + Shift + Alt + / |

> Si estos atajos no te resultan cómodos, puedes personalizarlos en VS Code desde el icono de engranaje ⚙ de la esquina inferior izquierda → Atajos de teclado.

## Configuración

| Clave de configuración                   | Descripción                                                                     | Ejemplo                                                             | Valor predeterminado |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------- |
| `variable-conversion.enabledFormats`     | Habilita o deshabilita las convenciones de nombres de variables.                | `{ "xxxCase.enabled": boolean, ... }`                               | Ver configuración    |
| `variable-conversion.formatOrder`        | Configura el orden de visualización de las convenciones de nombres de variables. | `[ "camel_case", "pascal_case", "snake_case" ]`                     | Ver configuración    |
| `variable-conversion.enabledPathFormats` | Habilita o deshabilita los formatos de ruta.                                    | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Ver configuración    |

Resumen de la configuración:

<table>
  <tr>
    <td align="center"><strong>Formatos habilitados</strong></td>
    <td align="center"><strong>Orden de formatos</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Formatos habilitados"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Orden de formatos"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Formatos de ruta habilitados</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Formatos de ruta habilitados"></td>
  </tr>
</table>

## Casos compatibles

### Conversión de variables

| Caso                     | Ejemplo          |
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

### Conversión de rutas

Estilos de ruta compatibles:

| Estilo        | Ejemplo                                        |
| ------------- | ---------------------------------------------- |
| Estilo Windows | `C:\Windows\System32` <br />`.\public\assets\` |
| Estilo Unix    | `/usr/bin`<br />`./public/assets/`             |

Estilos de ruta planificados:

| Estilo                                       | Ejemplo                               |
| -------------------------------------------- | ------------------------------------- |
| Estilo Windows (barras invertidas escapadas) | `C:\\Windows\\System32`               |
| Estilo Unix (barras invertidas escapadas)    | `\/usr\/bin`                          |
| Estilo Windows Git Bash                      | `/c/Windows/System32`                 |
| Protocolo `file://` del navegador            | `file:///C:/Program%20Files%20(x86)/` |

## Consejos

#### Acerca de las selecciones de texto

- Mantén pulsada la tecla `Alt` y selecciona varias regiones con el ratón.
- Mantén pulsado `Shift + Alt`, pulsa el botón izquierdo del ratón y arrastra sobre el bloque que quieres seleccionar.
- Pulsa `Ctrl + D` para seleccionar la palabra que hay bajo el cursor.

## Comentarios

Si tienes sugerencias para mejorar esta extensión o encuentras un error, [abre un issue en GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Se agradecen los comentarios en inglés o chino. Evita el uso de traducción automática para que las descripciones sigan siendo claras.

## Código abierto y contribución

Esta extensión es de código abierto bajo la MIT License. ¡Se aceptan pull requests para hacerla aún mejor!

Repositorio de GitHub: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Espejo en Gitee: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**¡Disfrútala!**
