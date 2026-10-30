# Abnahmebefund TICKET-009, Nachtrag 2: ÜBER-UNS und Typografie

## 1. ÜBER-UNS als eine Seite (Dropdown zurückbauen)

Eine einzige Seite /ueber-uns mit Text-Sektionen in dieser
Reihenfolge:
- „Die GBS": Text der alten Site, externer Link zur
  Stiftungs-Website (giordano-bruno-stiftung.de)
- „Hochschulgruppe": Inhalt der bisherigen Unterseite
- „Netzwerk": Inhalt der bisherigen Unterseite
- „Verbindungen": siehe Punkt 2

Header: KEIN Dropdown mehr; ÜBER UNS ist ein einzelner
Menüpunkt auf /ueber-uns (Reihenfolge unverändert:
MELDUNGEN · TERMINE · ÜBER UNS · KONTAKT · Suchlupe).
Die Unterseiten /hochschulgruppe und /netzwerk entfallen,
das Dropdown-CSS/JS wird sauber entfernt. Mobile: ÜBER UNS
ist ein normaler Punkt im Burger-Menü.

## 2. Verbindungen: Logo-Raster direkt einbetten

- In der Sektion „Verbindungen" auf /ueber-uns das bestehende
  Logo-Raster (25 Partner, Reihenfolge wie TICKET-008) DIREKT
  einbetten – bestehendes connections-Partial wiederverwenden.
- Die eigene Seite /verbindungen entfällt mitsamt Seiten-Eintrag.
  Die Collection verbindungen (25 Einträge) bleibt unverändert.
- Der Link unter der Startseiten-Sektion „Beste Verbindungen"
  zeigt künftig auf /ueber-uns#verbindungen (Anker zur Sektion).

## 3. „GBS Bodensee in den sozialen Netzen" als Unterüberschrift

An allen Stellen, wo dieser Text erscheint: als Unterüberschrift
(H3, Epilogue Bold) formatieren, ohne Doppelpunkt am Ende.

## 4. Überschriften in Petrol

- Hauptüberschriften aller Seiten (H1, z. B. „Über uns",
  „Kontakt", „Impressum"): var(--color-primary) statt schwarz.
- Alle weiteren Überschriften (H2/H3, Sektions-Titel,
  Karten-Titel) ebenfalls petrol. Ausnahme unverändert:
  weiß auf petrolfarbenen Hintergründen.

## 5. Typografie an die Vorlagen angleichen (größer)

Alle Seiten wirken insgesamt kleiner als die Referenz-Sites,
insbesondere die Fonts. Bitte die tatsächlichen Schriftgrößen
der Referenz-Sites (gbs-stuttgart.de, gbs-muc.de) pro
Elementtyp extrahieren (H1/H2/H3, Fließtext, News-Karten,
Slider, Navigation) und unsere Werte in tokens.css und
site.css entsprechend anheben – gemessene Werte, keine
Schätzungen. Zusätzlich den vertikalen Rhythmus (Sektions-
Abstände) mit vergleichen und angleichen.

## Vorgehen

Commit, push, Frontend-Build, Funktionstest aller betroffenen
URLs (insbesondere /ueber-uns, Startseite, Nav-Verlinkungen).
