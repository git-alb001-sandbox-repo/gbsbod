# Abnahmebefund TICKET-010, Nachtrag: Termin-Seite /termine

## 1. Seiten-Titel „Termine" entfernen

Über dem Abschnitt „Nächstes Treffen" steht aktuell noch
einmal „Termine" (der Seiten-Titel). Dieser entfällt –
„Nächstes Treffen" ist damit der erste Abschnitt der Seite.
Der Abschnitts-Titel „Termine" über dem Kalender-Teaser
bleibt unverändert.

## 2. Link zum GBS-Kalender wiederherstellen

Im Text „Auszug aus dem GBS-Kalender." fehlt der Link. Das
Wort „GBS-Kalender" soll auf die Seite des Kalenders verlinken:
https://www.giordano-bruno-stiftung.de/termine
(extern, target="_blank" rel="noopener noreferrer" – das ist
dasselbe Ziel, auf das auch die Termin-Links des Teasers
umgeschrieben werden).

## 3. Farbe der Termin-Einträge

Die Texteinträge der einzelnen Termine im Teaser sind derzeit
schwarz. Sie sollen dasselbe Grau erhalten wie der
Einleitungstext „Auszug aus dem GBS-Kalender." – gleiche
Farbvariable/-token verwenden.

## Vorgehen

Commit, push, Frontend-Build, Funktionstest (/termine:
„Nächstes Treffen" zuerst, kein doppelter „Termine"-Titel,
Link öffnet den GBS-Kalender in neuem Tab, Einträge im
gleichen Grau).
