# Migrations-Log: News der alten Drupal-Site (TICKET-011/-012)

Pilot: 3 älteste Meldungen (TICKET-011), Vollmigration: restliche
105 Meldungen (TICKET-012). Gesamtstand: 108 Entries in der
Collection `news`, alle `published`, Original-Daten und -Slugs.

## Konventionen (für alle Meldungen)

- Dateiname `YYYY-MM-DD.<slug>.md`, Slug 1:1 aus der alten URL
- Detail-Text 1:1 aus `field-name-body` (HTML → Markdown), nicht
  umformuliert, nicht gekürzt; fette/kursive Auszeichnungen,
  Links (extern, neuer Tab) und Listen bleiben erhalten
- Bild-Unterschriften (figcaption) als kursiver Absatz erhalten
- Erste Bild im Body → `bild`-Feld (Karte + Detail-Top-Bild);
  weitere Bilder inline im Text; Datei-Anhänge als Download-Link
  am Textende
- Teaser: übernimmt, wo vorhanden, den fett gesetzten Lead-Absatz
  der alten Site (gekürzt an Satzgrenze, endet mit „."→ keine
  Dots); sonst erster Satz des Textes
- `card_title`: redaktionell gekürzt bei langen Titeln (keine
  Abschneide-Dots, max. 2–3 Zeilen, keine Info, die der Teaser
  schon enthält); 77 der 105 Meldungen haben einen card_title
- Drupal-Footer-Links „Drucken"/„Senden" wurden nicht übernommen
  (kein redaktioneller Inhalt)

## Auffälligkeiten und getroffene Annahmen

- **100-jahre-hans-albert-der-online-festakt-zum-geburtstag**
  (2021-02-08): Der Body der alten Seite enthält ausschließlich
  ein YouTube-iframe, keinen Text. Das Video wurde 1:1 als
  responsives iframe übernommen; Teaser redaktionell verfasst.
- **hochkaraetige-veranstaltung-zuerich** (2017-10-20): Body ist
  nur ein kurzer Kalender-Hinweis; Teaser redaktionell verfasst.
- Ohne fett markierten Lead-Absatz (Teaser daher redaktionell aus
  dem Inhalt formuliert): der-typische-rechtsextremist-existiert-
  nicht, die-psychologie-der-extremistischen-brueckennarrative,
  ermutigung-zur-strafanzeige, groesser-besser-hbbk,
  neue-hoffnung-fuer-die-entkriminalisierung-von-
  schwangerschaftsabbruechen, online-veranstaltung-ethik-statt-reli.
- **saekularitaet-als-wertebasierte-identitaet-vortrag-konstanz**
  (2025-06-16) sowie die Slugs mit Suffix `-0`/`-1` (beide
  2025-06-27): drei getrennte alte Drupal-Nodes mit identischem
  Titel zu derselben Vortragsreihe; 1:1 jeweils als eigene
  Meldungen übernommen (Slug-Suffixe wie auf der alten Site).
- 9 Meldungen ohne Bild → Platzhalterbild auf der Karte
  (Detail-Seite ohne Bild), siehe TICKET-011-Befund.
- Alle Bild-/Datei-Downloads (116 Bilder, 27 Anhänge) erfolgreich;
  keine fehlgeschlagenen Downloads.

Keine weiteren Auffälligkeiten.
