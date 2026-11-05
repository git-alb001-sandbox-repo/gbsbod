# TICKET-018 – Sammlungen termine + themen entfernt

## Gelöscht
- `content/collections/termine.yaml` + Ordner (leer, .gitkeep)
- `content/collections/themen.yaml` + Ordner (leer, .gitkeep)
- `resources/blueprints/collections/termine/`, `.../themen/`
- `content/collections/pages/themen.md` (Route /themen)
- `resources/views/themen.antlers.html`, `themen-index.antlers.html`
- `config/statamic/search.php`: `collection:themen`, `collection:termine` aus searchables
- `resources/css/site.css`: `.themen-grid`/`.themen-kachel*` inkl. Media-Query-Regel

## grep-Nachweis (keine Rest-Referenzen)
`collection:termine`, `collection:themen`, `/themen`, `.themen-` in views/, routes/,
config/, site.css → keine Treffer (nur externe URLs mit „themen" im Pfad in News-Texten).
Nav-Baum enthielt bereits keinen /themen-Eintrag (Meldungen, Termine, Über uns, Kontakt).

## /themen-Nachlauf
Wayback (archive.org/wayback/available) für gbs-bodensee.de/themen und www.gbs-bodensee.de/themen:
kein Snapshot → alte Drupal-Site hatte /themen nicht öffentlich. Bewusst **404** (kein Redirect).
Verifiziert: `GET /themen` → 404 (Screenshot ticket-018-themen-404-1920.png).

## Verifikation (artisan serve, lokal)
- /, /termine, /aktuelles, /ueber-uns, /kontakt → 200
- /themen → 404
- `php please search:update` ausgeführt; `/suche?q=humanismus` → 200 mit Treffern (news/pages)
- Nav gerendert: Meldungen /aktuelles, Termine /termine, Über uns /ueber-uns, Kontakt /kontakt
  (Screenshot ticket-018-nav-1920.png)
- vite build erfolgreich

Screenshots: ticket-018-nav-1920.png, ticket-018-home-1920.png, ticket-018-themen-404-1920.png
