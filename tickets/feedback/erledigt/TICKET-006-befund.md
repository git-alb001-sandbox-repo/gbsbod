# Abnahmebefund TICKET-006

Punkte aus der manuellen Abnahme (Vergleich mit den
Referenz-Sites, insbesondere gbs-stuttgart.de). Falls
einzelne Punkte bereits behoben wurden, nur kurz
verifizieren und bestätigen.

## 1. Schrift-Zuordnung im Header falsch

Aktuell: Header-Menü und Spenden-Button verwenden Epilogue,
Footer und Fließtext verwenden Bitter.

Korrekt: Menüs (Header UND Footer) und Body-Text in Bitter,
Epilogue nur für Überschriften (H1–H3, Section-Headings) –
so definiert es die Design-Inventur (docs/design-inventur.md,
Abschnitt Schriften).

Zusätzlich prüfen, dass die woff2-Dateien selbst korrekt
zugeordnet sind (Bitter-Dateien enthalten Bitter, Epilogue-
Datei enthält Epilogue).

## 2. Menü-Einträge in Großbuchstaben

Auf den Referenz-Sites sind die Menü-Einträge in Header und
Footer in Großbuchstaben gesetzt (TERMINE, AKTUELLES usw.).
Bei uns nicht. Bitte Menü-Labels mit text-transform: uppercase
setzen und prüfen, ob die Referenz zusätzlich letter-spacing
oder font-weight definiert, und das übernehmen.

## 3. Suchen-Lupe im Header fehlt

Alle drei Referenz-Sites haben rechts im Header eine Suchen-
Lupe (Divi-Standard: Icon öffnet bei Klick ein aufklappendes
Suchfeld). Bei uns fehlt sie komplett.

Bitte ergänzen, Position und Verhalten wie bei den Referenz-
Sites (Lupe rechts neben dem Menü, Klick öffnet ein Suchfeld).
Funktionale Umsetzung: Statamic-Bordmittel für die Suche nutzen
(Suchformular → Ergebnis-Seite, Suche über die Collections
pages, news, themen, termine). Ergebnis-Seite im Vereinsdesign
(/suche).

Der Spenden-Button bleibt VORERST unverändert im Header –
sein Umbau ist separat als TICKET-010 geplant und ist NICHT
Teil dieses Befunds.

## Vorgehen

Alle Punkte gegen die Referenz-Sites verifizieren (HTML/CSS
per curl laden und die konkreten Werte extrahieren), unser
CSS/Templates entsprechend korrigieren, committen und pushen.
