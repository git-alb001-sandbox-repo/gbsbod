# TICKET-011: Content-Migration – Pilot mit den 3 ältesten Meldungen

## Aufgabe

PILOT vor der vollständigen Migration der 108 Meldungen:
die drei ältesten Meldungen der alten Drupal-Site
(gbs-bodensee.de) in die neue Site überführen. Ziel ist die
Validierung des kompletten Migrationswegs an kleinem Umfang,
bevor die restlichen 105 folgen (separates Ticket).

## Vorbild für die Darstellung: gbs-karlsruhe.de

Die Formatierung und Präsentation der Meldungen (News-Detail-
Ansicht: Titel, Datum, Bild, Textfluss) soll gbs-karlsruhe.de
als Vorbild folgen. Bitte die News-Darstellung dort laden und
die konkreten Werte MESSEN (HTML/CSS: Schriftgrößen, Abstände,
Datums-Anzeige, Bildbehandlung) und unsere News-Detail-Seite
damit angleichen. Gemessene Werte statt Schätzungen.

## Ergänzung: Format-Regeln für die News-Darstellung

1. **Bilder einheitlich:** Alle News-Bilder erscheinen immer in
   exakt gleicher Breite und Höhe – festes, einheitliches
   Seitenverhältnis, Beschnitt per object-fit: cover, damit
   unterschiedliche Originalformate einheitlich wirken. Gilt
   für die Karten im Index UND die Bilder auf der Detail-Seite.

2. **Karten-Überschriften:** maximal 2–3 Zeilen. Die
   Karlsruher Original-Titel sind teils zu lang – bitte stärker
   zusammenfassen als bei Karlsruhe. Der Original-Titel bleibt
   auf der Detail-Seite unverändert (1:1 zur alten Site); für
   die Karten-Ansicht gibt es bei langen Titeln eine
   verkürzte Fassung (eigenes Blueprint-Feld, z. B.
   card_title; bei kurzen Original-Titeln identisch).

3. **Teaser-Text:** deutlich kürzer als bei Karlsruhe. Die
   Abfassungs-Dots am Ende durch EIN LEERZEICHEN vom Text
   absetzen („Text …" statt „Text…").

## Vorgehen

1. Die drei ältesten Meldungen laut docs/inhalts-inventur.md
   bestimmen, per curl laden und extrahieren: Titel,
   Veröffentlichungsdatum, Einleitung/Teaser, vollständiger
   Text, Bilder.
2. Je Meldung ein Entry in der Collection news:
   - Dateiname: YYYY-MM-DD.<slug>.md (Original-Datum, für
     die Sortierung)
   - Slug wie die alte URL (transliteriert)
   - Status: published (alter Inhalt ist öffentlich)
   - Text 1:1 übernehmen – NICHT umformulieren, NICHT kürzen
     (Einfachheitsprinzip)
   - Bilder nach public/assets/news/, im Text referenzieren
3. News-Detail-Darstellung an gbs-karlsruhe.de angleichen.
   Template/CSS-Anpassungen sind in DIESEM Ticket ausdrücklich
   erlaubt – der Pilot klärt Migrationsweg UND Format.
4. Die drei Platzhalter-Einträge aus TICKET-008 werden nach
   erfolgreicher Überführung GELÖSCHT – in der Collection
   bleiben nur echte Meldungen.
5. Funktionstest: 3 Entries korrekt angelegt, Sortierung
   (älteste zuerst in der Index-Richtung), Detail-Seiten
   erreichbar, Bilder laden (200), Darstellung gegen
   Karlsruhe messbar.

## Abnahme durch Andreas

Alle drei Meldungen im Browser – wörtlicher Vergleich gegen
die alte Site (Inhalt) und gegen gbs-karlsruhe.de (Format).

## Akzeptanzkriterien

- Die 3 ältesten Meldungen vollständig und inhaltlich
  identisch überführt, Status published
- News-Detail-Darstellung folgt Karlsruhe (gemessene Werte)
- Platzhalter-Einträge entfernt
- Kurze Commit-Zusammenfassung: Was ist für die Migration
  der restlichen 105 Meldungen direkt wiederverwendbar?
- Statuswechsel doing→done NUR nach manueller Prüfung durch
  Andreas
