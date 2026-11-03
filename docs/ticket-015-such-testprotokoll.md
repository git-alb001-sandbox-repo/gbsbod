# TICKET-015: Such-Testprotokoll

Datum: 2026-11-03
Umgebung: lokal, `php please serve` (Port 8899), Index `default` (Driver local)
Index gebaut mit: `php please search:update` (Felder: title, content, teaser)

## Treffertest gerendert über /suche?q=… (HTTP 200, Treffer-Links geprüft auf 200)

| Suchbegriff | Treffer gesamt | davon news | davon pages | Beispiel-Trefferlink |
|---|---|---|---|---|
| Hörsaal | 3 | 3 | 0 | /meldung/die-situation-der-frauen-im-iran |
| AfD | 7 | 7 | 0 | /meldung/die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch |
| Säkularität | 4 | 4 | 0 | /meldung/saekularitaet-als-wertebasierte-identitaet-vortrag-konstanz |
| Abdel-Samad | 2 | 2 | 0 | /meldung/hamed-abdel-samad-konstanz |
| Datenschutz | 2 | 1 | 1 | /datenschutz |
| Impressum | 1 | 0 | 1 | /impressum |
| Konstanz | 47 | 47 | 0 | /meldung/konstanz-bahn-frei-fuer-das-humanistische-bildungs-und-begegnungszentrum |
| Bodensee-Forum (nur im teaser) | 1 | 1 | 0 | /meldung/hamed-abdel-samad-konstanz |
| Termin | 10 | 10 | 0 | – |

Umlaute/Sonderfälle: „Hörsaal“, „Säkularität“ liefern Treffer (siehe oben).
Negativtest: q=xyzqwertz123 → „Keine Treffer für ‚xyzqwertz123‘.“ (korrekt)

Alle geprüften Treffer-Links liefern HTTP 200.

## Sammlungen themen und termine

Die Sammlungen `themen` und `termine` enthalten derzeit keine Entries
(content/collections/themen und content/collections/termine sind leer),
daher kann die Suche dort keine Treffer liefern. Sobald Entries angelegt
werden (Datei oder CP), werden sie beim nächsten `search:update` indiziert.

## CLI-Treffertest (php please tinker, Index default)

Hörsaal=3 (news), AfD=7 (news), Säkularität=4 (news), Abdel-Samad=2 (news),
Datenschutz=2 (pages+news), Impressum=1 (pages), Konstanz=47 (news),
Vortrag=27 (news), GBS=47 (news+pages), Verein=16 (news+pages),
Bodensee-Forum=1, Stadttheater=1, Ersatztermin=2 (teaser-Treffer).
