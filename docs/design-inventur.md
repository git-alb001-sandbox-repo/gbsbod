# Design-Inventur der GBS-Referenz-Websites

Ticket: TICKET-002 · Stand: 2026-10-27
Analysiert: gbs-karlsruhe.de, gbs-stuttgart.de, gbs-muc.de (jeweils Startseite HTML + geladene Stylesheets)

## Technischer Befund

Alle drei Sites sind WordPress-Installationen mit dem **Divi-Theme** und einem gemeinsamen
Divi-Child-Theme („DiviChild", Author „Peder 03/2023", bludot.berlin). Layout, Farben,
Schriften, Slider-Konfiguration und Header-Verhalten sind praktisch identisch – die Sites
sind Klone eines Design-Systems. Die drei Startseiten nutzen exakt dieselben
Divi-Template-IDs (`et-divi-dynamic-tb-779-tb-152-485`). WordPress/Divi ist nur die
Referenz; für gbsbod wird das Design in Statamic nachgebaut.

## Struktur-Tabelle je Site

### gbs-karlsruhe.de
| # | Sektion | Beschreibung |
|---|---------|--------------|
| 1 | Header (sticky) | Transparentes Menü auf Petrol-Banner, Logo links (95–100 px), Menü rechts, runder Spenden-Button (150 px, rot, 7° gedreht) |
| 2 | Hero-Slider | Divi-Slider, 3 Slides (mit Hintergrundbild), Titel 36 px Petrol, Text 18 px Bitter, Höhe 600 px |
| 3 | „Unsere Themen zur Zeit:" | Text-Modul, Themenlinks |
| 4 | Aktuelle Termine | Plugin „Event Manager for Divi" (wpt_events), Terminliste |
| 5 | „Bleiben wir in Kontakt!" | Social-Media-Follow-Modul |
| 6 | „Beste Verbindungen" | 8 Logo-Bilder (Partner) in Raster |
| 7 | „Nichts mehr verpassen?" | Newsletter-Anmeldung |
| 8 | Spenden | Aufruf-Text + Button |
| 9 | „Interessante Links" | Linkliste |
| 10 | Footer | Logo, Menü, Social Media |

### gbs-stuttgart.de
| # | Sektion | Beschreibung |
|---|---------|--------------|
| 1 | Header (sticky) | identisch zu Karlsruhe |
| 2 | Hero-Slider (`startseiten-slider`) | Divi-Slider, Auto-Rotation 6000 ms, ansonsten identische Konfiguration |
| 3 | Aktuelles | Blog-Grid (Beitrags-Karten) |
| 4 | Überregionale Termine | Kalender-Plugin (`cal--content`) |
| 5 | „Nichts mehr verpassen?" | Newsletter-Form (Newsletter-Plugin 9.4.8) |
| 6 | „Wegweiser" | 4 Logo-Kacheln: gbs-Regionalgruppen, Humanisten BW, Säkulare Flüchtlingshilfe, Effektiver Altruismus |
| 7 | „Was uns noch wichtig ist:" | Text + Bilder |
| 8 | Footer | Logo, Menü, Social Media |

### gbs-muc.de
| # | Sektion | Beschreibung |
|---|---------|--------------|
| 1 | Header (sticky) | identisch zu Karlsruhe/Stuttgart |
| 2 | Hero-Slider | Divi-Slider, 3 Slides (München-Panorama, Leonardo, Rumpler-Nacht), identische Konfiguration |
| 3 | Aktuell | Blog-Grid (Beitrags-Karten) |
| 4 | „Was ist die gbs?" | Text + Logo-Bild |
| 5 | „Beste Verbindungen" | Logo-Bilder (Partner) |
| 6 | Newsletter-Form (Newsletter-Plugin 9.4.8) | Anmeldeformular |
| 7 | Footer | Logo, Menü, Social Media |

## Design-Tokens

### Farbwelt (Hex)

| Token | Wert | Verwendung |
|-------|------|-------------|
| Primär | `#006879` | Petrol: Slider-Titel, Header/Section-Hintergründe, Controller, Sub-Menü-Links |
| Sekundär | `#D3EFEF` | Hell-Petrol: Slider-Pfeile |
| Akzent | `#BF3636` | Rot: Spenden-Button, Slider-Pfeil-Hover, Hover-Aktionen |
| Akzent (mittel) | `#7EBEC5` | Mittel-Petrol, z. B. Cart-Icon-Farbe |
| Text (dunkel) | `#27424E` | Slider-Content, Fließtext-Akzente |
| Text (basis) | `#666666` | Divi-Body-Standard |
| Hintergrund | `#FFFFFF` | Weiß (überwiegend), Sections abwechselnd weiß/petrol |
| Hintergrund (grau) | `#F3F3F3`, `#E2E2E2` | Grau-Sections |
| Site-Sonderfarben | `#007588` (Stuttgart), `#00282E` (Karlsruhe, dunkles Petrol) | einzelne lokale Akzente |

### Schriften

| Schrift | Gewichte/Dateien | Verwendung |
|---------|------------------|------------|
| **Bitter** | Bitter-Medium.ttf, Bitter-SemiBold.ttf (selbst gehostet) | Slider-Text, News-/Textinhalte |
| **Epilogue** | Epilogue-Bold.ttf (selbst gehostet) | Überschriften |
| Open Sans / Arial (Divi-Fallback) | – | Body-Basis (14 px, line-height 1.7) |

### Größen-Hierarchie (Desktop)

| Element | Größe |
|---------|-------|
| H1 | 30 px |
| H2 | 26 px |
| H3 | 22 px |
| Slider-Titel | 36 px (mobil 30 px) |
| Slider-Text | 18 px (mobil 16 px) |
| Body-Basis | 14 px |
| Spenden-Button | 22 px |
| weitere Skalenwerte | 48 / 32 / 26 / 25 / 22 / 20 / 18 / 17 / 16 / 12 px |

### Layout

| Token | Wert |
|-------|------|
| Container-Breite | max-width **1080 px** (Divi-Standard) |
| Breakpoints | **479 / 767 / 980 / 1100 / 1350 px** (mobil: ≤ 980/767/479) |
| Header | sticky (`sticky-elements.js`), Höhe normal ~143 px, sticky 115 px (Logo 100 → 70 px), transparent auf Petrol-Banner |
| Slider | Divi-eigener `et_pb_slider` (jQuery, `scripts.min.js`), Höhe 600 px, Titel/Text linksbündig, Pfeile `#D3EFEF`, Hover `#BF3636`, Controller weiß/`#006879` |
| Buttons | 2 px Border, Radius 3 px (Standard); Spenden-Button rund 150 px, `#BF3636`, `rotate(7deg)` |

### Quellen-URLs je Stylesheet (je Site identisch, nur Domain unterschiedlich)

| Inhalt | URL |
|--------|-----|
| Startseite (HTML + Inline-CSS) | `https://<domain>/` |
| Child-Theme (nur Header, leer) | `https://<domain>/wp-content/themes/DiviChild/style.css` |
| Divi-Dynamic-CSS (Layout/Module) | `https://<domain>/wp-content/et-cache/485/et-divi-dynamic-tb-779-tb-152-485.css` |
| Divi-Dynamic-CSS (late) | `https://<domain>/wp-content/et-cache/485/et-divi-dynamic-tb-779-tb-152-485-late.css` |
| Google-Fonts-Cache (Bitter, Epilogue) | `https://<domain>/wp-content/uploads/omgf/et-builder-googlefonts-cached/et-builder-googlefonts-cached.css` |
| Self-hosted Fonts | `https://<domain>/wp-content/uploads/et-fonts/{Bitter-Medium,Bitter-SemiBold,Epilogue-Bold}.ttf` |
| Newsletter-Plugin | `https://<domain>/wp-content/plugins/newsletter/style.css?ver=9.4.8` |
| Event Manager for Divi (Karlsruhe) | `https://gbs-karlsruhe.de/wp-content/plugins/event-manager-for-divi/styles/style.min.css?ver=5.0.2` |

Domain-Übersicht: gbs-karlsruhe.de, gbs-stuttgart.de, gbs-muc.de

## Gegenüberstellung der drei Sites

| Block | Karlsruhe | Stuttgart | Muc | identisch? |
|-------|-----------|-----------|-----|------------|
| Header (sticky, Spenden-Button) | ✓ | ✓ | ✓ | ja, identisch |
| Hero-Slider (600 px, gleiche Styles) | ✓ (3 Slides) | ✓ (Auto 6 s) | ✓ (3 Slides) | ja, identisch |
| Aktuelles/Blog-Grid | – | ✓ | ✓ | ja (gleiches Blog-Grid-Modul) |
| Themen-Links | ✓ | – | – | nur Karlsruhe |
| Termine | ✓ (Event-Manager-Plugin) | ✓ (Überregional, Kalender-Plugin) | – | unterschiedlich (verschiedene Plugins) |
| Newsletter | ✓ | ✓ | ✓ | ja, identischer Zweck |
| „Beste Verbindungen" (Logos) | ✓ | – (als „Wegweiser") | ✓ | ähnlich, Labels unterschiedlich |
| Wegweiser/Partner-Kacheln | – | ✓ | – | nur Stuttgart |
| Spenden-Sektion | ✓ | – (Header-Button vorhanden) | – (Header-Button vorhanden) | Karlsruhe zusätzlich als Sektion |
| Social Media | ✓ | ✓ | ✓ | ja, identisch |
| „Was ist die gbs?"-Intro | – | – | ✓ | nur Muc |
| Footer (Logo, Menü, Social) | ✓ | ✓ | ✓ | ja, identisch |

**Gemeinsamkeiten:** Design-System (Farben, Schriften, Header, Slider, Buttons, Footer, Newsletter) vollständig identisch.
**Unterschiede:** nur die Reihenfolge und Auswahl der Inhaltsblöcke sowie die Termine-/Kalender-Plugins.

## Empfehlung: Statamic-Partials und Collections

### Partials (Wiederverwendbare Bausteine)

| Partial | Inhalt |
|---------|--------|
| `partials/header` | Sticky-Header: Logo, Hauptmenü, runder Spenden-Button (150 px, rot, 7° gedreht) |
| `partials/hero-slider` | Hero-Slider (600 px Höhe, Titel 36 px Petrol linksbündig, Text 18 px Bitter, Pfeile hell-petrol) |
| `partials/news-card` | Beitragkarte für Aktuelles/Blog-Grid (Titel, Datum, Teaser, Bild) |
| `partials/termin-list` / `partials/termin-card` | Terminanzeige (Datum, Titel, Ort, Link) |
| `partials/newsletter` | Newsletter-Anmeldeformular („Nichts mehr verpassen?") |
| `partials/connections` | Logo-Raster „Beste Verbindungen"/Partner-Kacheln |
| `partials/section-heading` | Einheitliche Sektions-Überschrift (H2 26 px, Epilogue Bold) |
| `partials/donate` | Spenden-Block/Spenden-CTA |
| `partials/social-links` | Social-Media-Icons |
| `partials/footer` | Logo, Footer-Menü, Social Media |

### Collections

| Collection | Einträge / Felder |
|------------|-------------------|
| `news` (Aktuelles) | Titel, Datum, Teaser, Bild, Inhalt |
| `termine` | Datum (von/bis), Titel, Ort, Beschreibung, externer Link, Kategorie (regional/überregional) |
| `themen` | Titel, Beschreibung, Zielseite (nur Karlsruhe-Stil) |
| `verbindungen` (Partner) | Name, Logo, URL |
| `slider` (Hero) | Bild, Titel, Text, Link – als Globals oder Struktur-Feld der Startseite |

### Design-Tokens für Statamic

Empfehlung: als CSS Custom Properties in `statamic-site/resources/css/tokens.css`:

```css
:root {
  --color-primary: #006879;
  --color-primary-light: #D3EFEF;
  --color-accent: #BF3636;
  --color-accent-mid: #7EBEC5;
  --color-text-dark: #27424E;
  --color-bg-gray: #F3F3F3;
  --font-heading: "Epilogue", sans-serif;   /* Epilogue-Bold.ttf */
  --font-body: "Bitter", serif;             /* Bitter-Medium/SemiBold.ttf */
  --container-max: 1080px;
}
```

Breakpoints: 479 / 767 / 980 / 1100 / 1350 px (Mobile-First: ≤ 767 mobil, 768–980 Tablet, ≥ 981 Desktop).
