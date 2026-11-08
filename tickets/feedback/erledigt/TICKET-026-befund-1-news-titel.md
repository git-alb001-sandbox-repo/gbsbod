# TICKET-026 BEFUND 1: News-Detail-Titel GROSS – soll wie Karlsruhe GEMISCHT sein

Andreas-Befund nach TICKET-026-Lieferung: Die neue Titel-Regel
({{ title   upper }}) schreibt auch die TITEL DER MELDUNGEN
groß ("DER JOKER IST … - GBS BODENSEE"). Das ist nicht gewollt.

## Vorgabe (Referenz: gbs-karlsruhe.de)

- SEITEN bleiben GROSS wie geliefert: "START - gbs Bodensee",
  "ÜBER UNS - gbs Bodensee", "MELDUNGEN - gbs Bodensee" usw.
- NEWS-DETAIL-Titel GEMISCHT, aus der jeweiligen Meldung
  abgeleitet, keine Großschreibung:
  "Meldungstitel in normaler Schreibweise - gbs Bodensee"

## Umsetzung

layout.antlers.html – Verzweigung nach Collection:

    <title>{{ if collection:handle == "news" }}{{ title | sanitize }}{{ else }}{{ title | upper | sanitize }}{{ /if }} - gbs Bodensee</title>

(Antlers-Syntax darf optimiert werden – Kern: news = Titel
unverändert gemischt, alle anderen Seiten = GROSS.)

## Verifikation

- News-Detail: Titel GEMISCHT exakt wie der Entry-Titel.
- Seiten weiter GROSS (unverändert).
- Screenshots in docs/; Teilergebnisse sofort pushen.
