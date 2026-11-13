# Redaktions-Doku – Regeln für Meldungen (News)

Zentrale Regeln für die redaktionelle Arbeit an News-Einträgen
(content/collections/news/). Aus den Befunden der Tickets
zusammengetragen, zuletzt TICKET-027 Befund 1 (2026-11-13).

## Kartentitel (card_title) – ZUKUNFTS-REGEL

Jede neue Meldung mit langem Titel erhält ein redaktionell gekürztes
`card_title` (Kartentitel in Übersichten). Muster: Kappung nach
Doppelpunkt bzw. inhaltliche Verdichtung. Kurze Titel bekommen kein
`card_title` – das Template fällt dann auf `title` zurück.

Der volle Titel bleibt im `title`-Feld und wird auf der Detailseite
angezeigt.

Beispiele (TICKET-027):

- 'Der Einfluss der abrahamitischen Religionen auf das
  Wirtschaftswachstum' → card_title: 'Religionen und Wirtschaftswachstum'
- 'Kinderehen in Baden-Württemberg: 358 Fälle, nur acht Aufhebungen'
  → card_title: 'Kinderehen in Baden-Württemberg'
- 'Neue Sprachquoten und Gesichtsverschleierungsverbot an Schulen'
  → card_title: 'Sprachquoten und Verschleierungsverbot'
- 'Seelenfänger scheitern in Karlsruhe' → kurz genug, kein card_title

Blueprint-Hinweis (resources/blueprints/collections/news/news.yaml):
Karten-Titel redaktionell kürzen statt abschneiden, keine Dots
(nie „Titel …"), keine Informationen, die der Teaser bereits enthält.

## Datumsanzeige

Meldungsdaten werden locale-de gerendert ("12. Okt. 2026", nicht
"12. Oct. 2026"): in den Templates `{{ date iso_format="DD. MMM[.] YYYY" }}`
(Carbon, Locale de aus APP_LOCALE). Nicht `format="d. M. Y"` nutzen –
PHP date() liefert bei "M" immer englische Monatskürzel.

## HTML-Titel (TICKET-026)

- Seiten-Titel GROSS: "START - gbs Bodensee", "MELDUNGEN - gbs Bodensee" usw.
- News-Detail-Titel GEMISCHT, exakt wie der Entry-Titel:
  "Meldungstitel - gbs Bodensee" (Verzweigung in layout.antlers.html
  nach Collection-Handle).
