# TICKET-026: Verifikation (gerendert, lokale VM via `php artisan serve`)

Datum: 09.11.2026

## 1. HTML-Titel je Seitentyp (curl gegen http://localhost:8000)

| URL | gerendertes `<title>` |
|---|---|
| `/` | `START - gbs Bodensee` |
| `/ueber-uns` | `ÜBER UNS - gbs Bodensee` |
| `/aktuelles` (Meldungen) | `MELDUNGEN - gbs Bodensee` |
| `/kontakt` | `KONTAKT - gbs Bodensee` |
| `/termine` (Kalender) | `TERMINE - gbs Bodensee` |
| `/datenschutz` | `DATENSCHUTZERKLÄRUNG - gbs Bodensee` |
| `/impressum` | `IMPRESSUM - gbs Bodensee` |
| `/meldung/hamed-abdel-samad-konstanz` (News-Detail) | `HAMED ABDEL-SAMAD IN KONSTANZ - gbs Bodensee` |

News-Detail-Titel werden wie im Ticket angekündigt ebenfalls GROSS
gerendert (einheitliches Muster) – bewusste Folge, in der manuellen
Abnahme zu prüfen.

## Befund 1 (tickets/feedback/TICKET-026-befund-1-news-titel.md)

News-Detail-Titel sollen GEMISCHT bleiben (Referenz gbs-karlsruhe.de),
nur Seiten GROSS. Umsetzung in layout.antlers.html:

    <title>{{ if collection:handle == "news" }}{{ title | sanitize }}{{ else }}{{ title | upper | sanitize }}{{ /if }} - gbs Bodensee</title>

Gerendert nach Fix:

| URL | gerendertes `<title>` |
|---|---|
| `/` | `START - gbs Bodensee` |
| `/ueber-uns` | `ÜBER UNS - gbs Bodensee` |
| `/aktuelles` | `MELDUNGEN - gbs Bodensee` |
| `/kontakt` | `KONTAKT - gbs Bodensee` |
| `/termine` | `TERMINE - gbs Bodensee` |
| `/meldung/hamed-abdel-samad-konstanz` | `Hamed Abdel-Samad in Konstanz - gbs Bodensee` |
| `/meldung/die-wunderbruehe-aus-okinawa` | `Die Wunderbrühe aus Okinawa - gbs Bodensee` |

Hinweis: Die 404-Seite rendert ` - gbs Bodensee` (kein `title` gesetzt,
kein Fallback mehr wie zuvor auf `site:name`). Nicht Teil des Tickets;
bei Bedarf Sonderbehandlung in einem Folge-Ticket.

## 2. Favicon

`<head>` auf allen Seiten (geprüft auf `/`):

```html
<link rel="icon" href="/gbs_favicon-32x32.png" sizes="32x32" />
<link rel="icon" href="/gbs_favicon-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="/gbs_favicon-180x180.png" />
```

HTTP-Status der Icon-Dateien (DocRoot `public/`):

| Datei | Status | Content-Type |
|---|---|---|
| `/gbs_favicon-32x32.png` | 200 | image/png |
| `/gbs_favicon-192x192.png` | 200 | image/png |
| `/gbs_favicon-180x180.png` | 200 | image/png |
| `/favicon.ico` | 200 | image/vnd.microsoft.icon |

Quelle: gbs-karlsruhe.de (wp-content/uploads/cropped-gbs_favicon-*.png
und /favicon.ico), byte-identisch übernommen nach `public/`.

## 3. Screenshots

Keine Screenshots möglich: kein headless-fähiger Browser in der VM
(Firefox --headless liefert kein PNG). Verifikation daher per curl
(siehe oben).
