# TICKET-014 Befund 4 – Messprotokoll (gerendert, Puppeteer/headless, 1920×1080 Viewport)

## Referenz gbs-stuttgart.de (gerendert gemessen)
| Wert | normal | sticky |
|---|---|---|
| Header-Band | 143 px | 143 px |
| Logo | 211 × 95 px | 156 × 70 px |
| Footer-Band | 200 px | – |

CSS-Angabe Stuttgart war height:100px/max-height:95px – gerendert bestätigt: 95 px.

## Eigen (vorher → nachher)
| Wert | vorher | nachher | Stuttgart |
|---|---|---|---|
| Header-Band 1920 | 117 px | **143 px** | 143 px |
| Logo 1920 | 226 × 95 | 226 × 95 px | 211 × 95 px |
| sticky Band 1920 | 108 px | **143 px** | 143 px |
| sticky Logo 1920 | 166 × 70 | 166 × 70 px | 156 × 70 px |
| Logo 768 | 190 × 80 | 190 × 80 px | 80 px (CSS) |
| Logo 375 | 143 × 60 | 143 × 60 px | 60 px (CSS) |
| Footer-Band | 117 px | 117 px (unverändert) | 200 px |

Abweichung Bandhöhe: 0 px (Toleranz ±5 px eingehalten). Logo-Höhe: 0 px.
Logo-Breite weicht wegen SVG-Seitenverhältnis ab (2,38:1 vs 2,22:1) – Höhe ist
maßgeblich und identisch. Treff-Button: overhang 44 px, nicht abgeschnitten.

## Änderung
padding-block Header 11→24 px (95+2×24=143), --header-height 117→143 px,
sticky min-height → var(--header-height) (143 px), mobil min-height 108 px.
Screenshots: ticket-014-befund4-{stuttgart,vorher,nachher}-1920.png,
nachher-{768,375}.png
