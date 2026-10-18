[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · **Français** · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.compressed.png" width="128" alt="Logo de la conversion de variables">
</p>

<h1 align="center">Conversion de variables</h1>

<p align="center"><em>Une extension puissante pour VS Code dédiée à la conversion des noms de variables et des styles de chemins</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Prend en charge la conversion en un clic et la conversion cyclique, et peut être utilisée via le menu contextuel, les raccourcis clavier, la barre d'état, et bien plus encore.

- ✅ Prise en charge des sélections multiples
- ✅ Prise en charge de plusieurs fenêtres d'éditeur
- ✅ Prise en charge de l'annulation et du rétablissement (Ctrl + Z / Ctrl + Y)
- ✅ Activer uniquement les formats de conversion cibles dont vous avez besoin

## Utilisation

### Conversion cyclique

Sélectionnez dans l'éditeur le texte que vous souhaitez convertir, puis appuyez sur `Ctrl + Alt + [` ou `Ctrl + Alt + ]` pour parcourir les conventions de nommage disponibles.

![](image/cyclic-conversion.gif)

### Conversion de base

**1. Sélectionnez le texte à convertir**

![Étape 1 : sélectionnez le texte à convertir](image/step1-select-the-text-to-convert.gif)

**2. Appuyez sur `Shift + Alt + T`**

![Étape 2 : appuyez sur Shift + Alt + T](image/step2-press-shift-alt-t.gif)

Ou cliquez sur le bouton `Conversion de variables` dans la barre d'état.

![Étape 2 : cliquez sur le bouton de la barre d'état](image/step2-press-status-bar-button.png)

Ou faites un clic droit → `Conversion de variables`.

![Étape 2 : conversion de variables dans le menu contextuel](image/step2-variable-conversion-on-context-menu.png)

Ou faites un clic droit sur le texte sélectionné → `Convertir la variable en...`.

![Étape 2 : clic droit sur le texte sélectionné](image/step2-right-click-on-the-selected-text.gif)

**3. Sélectionnez la cible de conversion** — et c'est terminé.

### Conversion de chemins (Beta)

> Cette fonctionnalité est encore en version Beta. Si vous rencontrez des problèmes, merci de nous en informer via les coordonnées indiquées à la fin de ce document.

La conversion de chemins fonctionne de la même manière que la conversion de variables — via le menu contextuel, la barre d'état ou les raccourcis clavier. La seule différence réside dans les raccourcis :

- Style de chemin suivant : `Ctrl + Alt + /`
- Style de chemin précédent : `Ctrl + Alt + Shift + /`

![Conversion de chemins](image/path-conversion.gif)

**Remarque :** seuls les chemins de style Windows et de style Unix sont pris en charge pour le moment, les deux raccourcis ont donc actuellement le même effet. D'autres styles de chemins sont prévus (par exemple le style Windows Git Bash, le protocole `file://` du navigateur).

## Raccourcis clavier

| Fonctionnalité                                 | Raccourci              |
| ---------------------------------------------- | ---------------------- |
| Sélection rapide de la conversion de variables | Shift + Alt + T        |
| Conversion cyclique de variables → précédente  | Ctrl + Alt + [         |
| Conversion cyclique de variables → suivante    | Ctrl + Alt + ]         |
| Afficher la boîte de dialogue d'ordre des formats | Ctrl + Alt + \`     |
| Sélection rapide de la conversion de chemins   | Shift + Alt + /        |
| Conversion cyclique de chemins → précédente    | Ctrl + Alt + /         |
| Conversion cyclique de chemins → suivante      | Ctrl + Shift + Alt + / |

> Si ces raccourcis ne vous conviennent pas, vous pouvez les personnaliser dans VS Code via l'icône d'engrenage ⚙ en bas à gauche → Raccourcis clavier.

## Configuration

| Clé de configuration                    | Description                                                    | Exemple                                                          | Valeur par défaut |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
| `variable-conversion.enabledFormats`    | Activer ou désactiver les conventions de nommage des variables. | `{ "xxxCase.enabled": boolean, ... }`                            | Voir les paramètres |
| `variable-conversion.formatOrder`       | Configurer l'ordre d'affichage des conventions de nommage des variables. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Voir les paramètres |
| `variable-conversion.enabledPathFormats` | Activer ou désactiver les formats de chemin.                  | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Voir les paramètres |

Aperçu des paramètres :

<table>
  <tr>
    <td align="center"><strong>Formats activés</strong></td>
    <td align="center"><strong>Ordre des formats</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Formats activés"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Ordre des formats"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Formats de chemin activés</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Formats de chemin activés"></td>
  </tr>
</table>

## Casses prises en charge

### Conversion de variables

| Casse                    | Exemple          |
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

### Conversion de chemins

Styles de chemin pris en charge :

| Style         | Exemple                                        |
| ------------- | ---------------------------------------------- |
| Windows Style | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix Style    | `/usr/bin`<br />`./public/assets/`             |

Styles de chemin prévus :

| Style                             | Exemple                               |
| --------------------------------- | ------------------------------------- |
| Windows Style (Backslash Escaped) | `C:\\Windows\\System32`               |
| Unix Style (Backslash Escaped)    | `\/usr\/bin`                          |
| Windows Git Bash Style            | `/c/Windows/System32`                 |
| Browser `file://` protocol        | `file:///C:/Program%20Files%20(x86)/` |

## Astuces

#### À propos des sélections de texte

- Maintenez `Alt` enfoncé, puis sélectionnez plusieurs zones avec la souris.
- Maintenez `Shift + Alt` enfoncé, appuyez sur le bouton gauche de la souris et faites glisser sur le bloc que vous souhaitez sélectionner.
- Appuyez sur `Ctrl + D` pour sélectionner le mot sous le curseur.

## Retours

Si vous avez des suggestions pour améliorer cette extension, ou si vous trouvez un bug, merci d'[ouvrir une issue sur GitHub](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). Les retours en anglais ou en chinois sont les bienvenus. Veuillez éviter la traduction automatique afin que les descriptions restent claires.

## Open Source & Contribution

Cette extension est open source sous licence MIT License. Les pull requests sont les bienvenues pour la rendre encore meilleure !

GitHub Repo : https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Miroir Gitee : https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**Amusez-vous bien !**
