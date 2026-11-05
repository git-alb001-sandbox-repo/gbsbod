# TICKET-020 – Kalender-Teaser im Stuttgart-Format (Bild-Karten, 3er-Raster)

## Endpoint-Analyse (gbs-termine.de)
- `cal_teaser_short.php?action=cal_teaser_short&website_id=16` → nur Text-Variante (`tpl cal_teaser_short`, 10 Rows, keine Bilder)
- `...&website_id=2` → **Bild-Karten-Template `tpl cal_teaser_short_gbs10`** (3 Rows, `layout--grid-h3 hv-calendar cal-default gbs10`) – exakt das, was gbs-stuttgart.de/#termine rendert ("Überregionale Termine")
- `website_id=16` mit gbs16-/tpl-/preset-/image-Parametern liefert nie das Bild-Template → Umstellung auf `website_id=2` (Stiftungs-Termine, identisch zu Stuttgart)
- Antwort-HTML pro Termin: `article.teaser-row.teaser-short` > `header.cal--header` (`dd.cal--date`/`dd.cal--location`) + `div.layout--grid-1-2` (`figure.cal--picture` mit inline `background-image` + `img.visually-hidden`, `div.cal--content` mit `h2.cal--title a` + `p.cal-subtitle`)
- Bild-URLs bereits absolut `https://gbs-termine.de/files/tmp/preset-teaser--gbs10_<hash>.jpg|png` → kein Rewrite nötig
- Termin-Links roh `href="/veranstaltungen?action=cal&id=…"` → bestehendes `rewriteLinks()` auf `giordano-bruno-stiftung.de` + `target="_blank" rel="noopener noreferrer"` greift unverändert
- Caching (15 Min) + Fallback-Text unverändert

## Gerendert gemessen an gbs-stuttgart.de/#termine (Puppeteer 1920 + 375) → umgesetzt
| Element | Stuttgart (1920) | gbsbod nachher |
|---|---|---|
| Wrapper `layout--grid-h3` | flex, wrap, margin −16px | 1:1 |
| `.teaser-row` | margin 16px, 3 pro Zeile (490px bei 1568) | flex `0 0 calc((100% - 64px)/3)`, margin 16px → 3 pro Zeile; ≤980px 1 pro Zeile |
| Datum/Ort-Labels | inline-block, bg `#006879`, weiß, 16px, padding `0 13px`, margin-right 6px | 1:1 |
| Bild `.cal--picture` | 200×333 (3:5), background cover | 1:1 (`width:200px; aspect-ratio:3/5; background-size:cover`) |
| Titel | 22.4px, weight 500, `#006879`, margin `16px 0 8px`, padding-bottom 10px | 1:1 |
| Subtitle | 18px, `#27424E` | 1:1 |

## Verifikation lokal (artisan serve + Puppeteer)
- home + /termine, 1920 + 375: `rows=3, imgs=3`, Bilder geladen (`naturalWidth>0`)
- Home zeigt genau 3 (sichtbar), Limit-Regel `.section-termine … :nth-child(n+4)` aus TICKET-016 bleibt aktiv
- Links → `giordano-bruno-stiftung.de/termine?action=cal&id=…` mit `target="_blank" rel="noopener noreferrer"`
- Vorher: 10 Text-Rows ohne Bilder; Nachher: 3 Bild-Karten

Screenshots: `ticket-020-{vorher,nachher}-{home,termine}-{1920,375}.png`, Referenz `ticket-020-ref-stuttgart-termine-1920.png`
