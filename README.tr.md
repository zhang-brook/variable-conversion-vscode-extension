[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [Polski](README.pl.md) · **Türkçe** · [Čeština](README.cs.md) · [Magyar](README.hu.md)

<p align="center">
  <img src="image/logo.png" width="128" alt="Değişken Dönüştürme logosu">
</p>

<h1 align="center">Değişken Dönüştürme</h1>

<p align="center"><em>VS Code için güçlü bir değişken adlandırma ve yol stili dönüştürme uzantısı</em></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=coder-xiaomo.variable-conversion">Marketplace</a> ·
  <a href="https://open-vsx.org/extension/coder-xiaomo/variable-conversion">OpenVSX</a> ·
  <a href="https://github.com/zhang-brook/variable-conversion-vscode-extension">GitHub</a> ·
  <a href="https://gitee.com/zhang-brook/variable-conversion-vscode-extension">Gitee</a>
</p>

Tek tuşla dönüştürmeyi ve döngüsel dönüştürmeyi destekler; bağlam menüsü, klavye kısayolları, durum çubuğu ve daha fazlası üzerinden kullanılabilir.

- ✅ Çoklu seçim desteği
- ✅ Birden fazla düzenleyici penceresi desteği
- ✅ Geri alma ve yineleme desteği (Ctrl + Z / Ctrl + Y)
- ✅ Yalnızca ihtiyacınız olan hedef dönüştürme biçimlerini etkinleştirin

## Nasıl Kullanılır

### Döngüsel dönüştürme

Dönüştürmek istediğiniz metni düzenleyicide seçin, ardından kullanılabilir adlandırma kuralları arasında geçiş yapmak için `Ctrl + Alt + [` veya `Ctrl + Alt + ]` tuşlarına basın.

![](image/cyclic-conversion.gif)

### Temel dönüştürme

**1. Dönüştürülecek metni seçin**

![Adım 1: Dönüştürülecek metni seçin](image/step1-select-the-text-to-convert.gif)

**2. `Shift + Alt + T` tuşlarına basın**

![Adım 2: Shift + Alt + T tuşlarına basın](image/step2-press-shift-alt-t.gif)

Veya durum çubuğundaki `Değişken Dönüştürme` düğmesine tıklayın.

![Adım 2: Durum çubuğu düğmesine tıklayın](image/step2-press-status-bar-button.png)

Veya sağ tıklayın → `Değişken Dönüştürme`.

![Adım 2: Bağlam menüsünde değişken dönüştürme](image/step2-variable-conversion-on-context-menu.png)

Veya seçili metne sağ tıklayın → `Değişkeni dönüştür...`.

![Adım 2: Seçili metne sağ tıklayın](image/step2-right-click-on-the-selected-text.gif)

**3. Dönüştürme hedefini seçin** — hepsi bu kadar.

### Yol Dönüştürme (Beta)

> Bu özellik hâlâ Beta aşamasındadır. Herhangi bir sorunla karşılaşırsanız lütfen bu belgenin sonundaki iletişim bilgilerini kullanarak bize bildirin.

Yol dönüştürme, değişken dönüştürmeyle aynı şekilde çalışır — bağlam menüsü, durum çubuğu veya klavye kısayolları üzerinden. Tek fark kısayollardır:

- Sonraki yol stili: `Ctrl + Alt + /`
- Önceki yol stili: `Ctrl + Alt + Shift + /`

![Yol Dönüştürme](image/path-conversion.gif)

**Not:** Şu anda yalnızca Windows stili ve Unix stili yollar desteklendiğinden, her iki kısayol da şimdilik aynı işlevi görür. Daha fazla yol stili planlanıyor (ör. Windows Git Bash stili, tarayıcı `file://` protokolü).

## Kısayol tuşları

| Özellik                                             | Kısayol                |
| --------------------------------------------------- | ---------------------- |
| Değişken dönüştürme Hızlı Seçimi                    | Shift + Alt + T        |
| Değişken döngüsel dönüştürme → önceki               | Ctrl + Alt + [         |
| Değişken döngüsel dönüştürme → sonraki              | Ctrl + Alt + ]         |
| Biçim sırası bilgi iletişim kutusunu göster         | Ctrl + Alt + \`        |
| Yol dönüştürme Hızlı Seçimi                         | Shift + Alt + /        |
| Yol döngüsel dönüştürme → önceki                    | Ctrl + Alt + /         |
| Yol döngüsel dönüştürme → sonraki                   | Ctrl + Shift + Alt + / |

> Bu kısayollar size uygun değilse, VS Code'da sol alt köşedeki dişli simgesi ⚙ → Klavye Kısayolları yoluyla bunları özelleştirebilirsiniz.

## Yapılandırma

| Yapılandırma anahtarı                   | Açıklama                                                       | Örnek                                                            | Varsayılan   |
| --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ |
| `variable-conversion.enabledFormats`    | Değişken adlandırma kurallarını etkinleştirin veya devre dışı bırakın. | `{ "xxxCase.enabled": boolean, ... }`                            | Ayarlara bakın |
| `variable-conversion.formatOrder`       | Değişken adlandırma kurallarının görüntülenme sırasını yapılandırın. | `[ "camel_case", "pascal_case", "snake_case" ]`                  | Ayarlara bakın |
| `variable-conversion.enabledPathFormats` | Yol biçimlerini etkinleştirin veya devre dışı bırakın.        | `{ "windowsStyle.enabled": boolean, "unixStyle.enabled": boolean }` | Ayarlara bakın |

Ayarlara genel bakış:

<table>
  <tr>
    <td align="center"><strong>Etkin Biçimler</strong></td>
    <td align="center"><strong>Biçim Sırası</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="image/settings-enable-formats.png" alt="Enabled Formats"></td>
    <td align="center"><img src="image/settings-format-order.png" alt="Format Order"></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><strong>Etkin Yol Biçimleri</strong></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><img src="image/settings-enable-path-formats.png" alt="Enabled Path Formats"></td>
  </tr>
</table>

## Desteklenen biçimler

### Değişken Dönüştürme

| Adlandırma kuralı        | Örnek            |
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

### Yol Dönüştürme

Desteklenen yol stilleri:

| Stil          | Örnek                                          |
| ------------- | ---------------------------------------------- |
| Windows stili | `C:\Windows\System32` <br />`.\public\assets\` |
| Unix stili    | `/usr/bin`<br />`./public/assets/`             |

Planlanan yol stilleri:

| Stil                                      | Örnek                                 |
| --------------------------------- | ------------------------------------- |
| Windows stili (ters eğik çizgi kaçışlı)   | `C:\\Windows\\System32`               |
| Unix stili (ters eğik çizgi kaçışlı)      | `\/usr\/bin`                          |
| Windows Git Bash stili                    | `/c/Windows/System32`                 |
| Tarayıcı `file://` protokolü              | `file:///C:/Program%20Files%20(x86)/` |

## İpuçları

#### Metin seçimleri hakkında

- Birden çok bölgeyi seçmek için `Alt` tuşunu basılı tutun ve fareyle seçim yapın.
- `Shift + Alt` tuşlarını basılı tutun, sol fare düğmesine basın ve seçmek istediğiniz bloğun üzerine sürükleyin.
- İmlecin altındaki sözcüğü seçmek için `Ctrl + D` tuşlarına basın.

## Geri bildirim

Bu uzantıyı geliştirmeye yönelik önerileriniz varsa veya bir hata bulduysanız, lütfen [GitHub'da bir sorun bildirin](https://github.com/zhang-brook/variable-conversion-vscode-extension/issues). İngilizce veya Çince geri bildirimler memnuniyetle karşılanır. Açıklamaların anlaşılır kalması için lütfen makine çevirisinden kaçının.

## Açık kaynak ve katkı

Bu uzantı MIT License altında açık kaynaktır. Daha da iyi hale getirmek için pull request'ler memnuniyetle karşılanır!

GitHub deposu: https://github.com/zhang-brook/variable-conversion-vscode-extension.git

Gitee aynası: https://gitee.com/zhang-brook/variable-conversion-vscode-extension.git

-----

**İyi eğlenceler!**
