# TICKET-017 – Messprotokoll (gerendert, Puppeteer/Chrome headless, 1920×1080 und 375×812)

## Referenz gbs-muc.de (gbs-stuttgart.de und gbs-karlsruhe.de identisch verifiziert)

| Wert | gemessen (1920) | Umsetzung gbsbod |
|---|---|---|
| Overlay über Foto | **keins** (`.et_pb_slider_with_overlay` nicht aktiv) | `.hero-slide-overlay` entfernt |
| Lesbarkeit Desktop | description-Kasten **deckend weiß** `rgb(255,255,255)`, `border-radius: 0 500px 500px 0`, `padding: 30px 80px 40px 0`, `margin-top: 50px`, Breite 794.8 px, `::before` weißer Streifen `left:-150px; width:150px; height:100%; z-index:-1` | `.hero-slide-content::before` 1:1 (`left:-150px; right:0; radius 0 500px 500px 0; bg #fff`), content `max-width:795px; padding:30px 80px 40px 0; margin-top:50px` |
| Lesbarkeit Mobil (375) | Kasten weg (`bg: transparent`, radius 0, padding `15px 26.25px`), Text **weiß**, `text-shadow: rgba(0,0,0,0.3) 0 1px 3px` | ab ≤980 px identisch umgesetzt |
| Animation Content | `.et-pb-active-slide .et_pb_slide_description`: `fadeBottom 0.7s ease-in-out 0.9s both`; Keyframes `0%{opacity:0; transform:translateY(10%)} 100%{opacity:1; transform:translateY(0)}`; retriggert bei jedem Slide-Wechsel (gemessen: nach Klick delay 0.9s, opacity 0 → 1) | `@keyframes hero-content-in` identisch; `.hero-slide.is-active .hero-slide-content { animation: hero-content-in 0.7s ease-in-out 0.9s both }` (retriggert über is-active-Toggle, kein JS) |
| Titel | 36 px, weight 400 (muc) / 300 (stuttgart), Farbe `#006879`, margin-top 0 | 36 px, weight 400, `var(--color-primary)` |
| Text | 18 px, `#27424E`, line-height 23.4px (1.3) | 1:1 |
| Link/Button | `.et_pb_more_button`: bg `#fff`, color `#006879`, `border: 2px solid #006879`, radius 50px, padding `5.1px 17px`, 17px, weight 500, margin-top 20px | 1:1 als `.hero-slide-link` |
| Mobil Titel (375) | 25 px, weight 500, petrol | ≤479 px: 25 px, weight 500 |
| Slider-Höhe | 600 px (1920), 525 px (375) | unverändert (600/460/380 px, TICKET-008) |
| Auto-Rotation | `et_slider_speed_6000` = 6000 ms | `data-interval="6000"` unverändert |
| Pfeile | `#D3EFEF`, 48 px, Hover `#BF3636` | bereits identisch (TICKET-008) |
| Dots | weiß, aktiv `#006879` | bereits identisch |

Position: wie RGs Fullwidth-Slide mit `padding-inline: 6 %` (gerendert: 1920→115.2 px,
1366→82 px, 1100→66 px, exakt 6 % vw). Content-Kasten (::before `left:-150px`) ragt
dadurch bis zum linken Seitenrand (kastenStartX −34.8 px bei 1920, am Rand abgeschnitten);
verifiziert per Pixelprobe (x=5,y=450 = weiß). Content selbst: `width:795px` fix,
x=115.2 px bei 1920 – identisch zur Referenz. Mobil (≤980 px): `padding-inline: 0`,
Content volle Breite mit eigenem Padding.

## Eigen gbsbod nach Umsetzung (verifiziert, localhost:8000)

- `.hero-slide-overlay` nicht mehr im DOM; Pixelprobe vorher (204,198,192 Verlauf) → nachher Foto (73,50,27) ✓
- content computed: `animation: hero-content-in 0.7s ease-in-out 0.9s both`; Wechsel: opacity 0.028/translateY(20.8px) mitten in Animation → danach opacity 1 ✓
- `::before`: bg `rgb(255,255,255)`, radius `0 500px 500px 0`, left `-150px`, width 945 px ✓
- padding content: `30px 80px 40px 0` ✓ (ab 1350 px via 2-Klassen-Selektor gegen `.container padding-inline` abgesichert)
- Empty-State: `slides: []` → `<section class="hero-slider">` rendert nicht (0 Treffer), 6 home-sections bleiben ✓

## Screenshots (docs/)

- `ticket-017-ref-gbs-muc-de-1920.png`, `ticket-017-ref-gbs-muc-de-375.png` – Referenz
- `ticket-017-vorher-{fertig,anim-start,wechsel,fertig-wechsel}-1920.png`, `ticket-017-vorher-fertig-375.png`
- `ticket-017-nachher-{fertig,anim-start,wechsel,fertig-wechsel}-1920.png`, `ticket-017-nachher-fertig-375.png`
- `ticket-017-leer-1920.png` – Empty-State (slides: [])
