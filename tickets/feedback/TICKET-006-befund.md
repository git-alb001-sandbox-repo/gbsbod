# Abnahmebefund TICKET-006

Zwei Punkte aus der manuellen Abnahme (Vergleich mit den
Referenz-Sites, insbesondere gbs-stuttgart.de):

## 1. Schrift-Zuordnung im Header falsch

Aktuell: Header-Menü und Spenden-Button verwenden Epilogue,
Footer und Fließtext verwenden Bitter.

Korrekt wäre: Menüs (Header UND Footer) und Body-Text in Bitter,
Epilogue nur für Überschriften (H1–H3, Section-Headings) – so
definiert es die Design-Inventur (docs/design-inventur.md,
Abschnitt Schriften).

Bitte zusätzlich prüfen, dass die woff2-Dateien selbst korrekt
zugeordnet sind (Bitter-Dateien enthalten Bitter, Epilogue-Datei
enthält Epilogue), z. B. durch Rendern einer Testzeile in beiden
Fonts oder Abgleich mit den Google-Fonts-Originalen.

## 2. Menü-Einträge in Großbuchstaben

Auf den Referenz-Sites sind die Menü-Einträge in Header und
Footer in Großbuchstaben gesetzt (TERMINE, AKTUELLES usw.) –
bei uns nicht.

Bitte Menü-Labels (Header- und Footer-Navigation) mit
text-transform: uppercase setzen und gegen die Referenz-Sites
verifizieren (dort per CSS-Inspektion prüfen, ob zusätzlich
letter-spacing oder font-weight für die Menü-Labels definiert
ist, und das übernehmen).

## Vorgehen

Zur Sicherheit beide Punkte gegen die Referenz-Sites prüfen
(z. B. gbs-stuttgart.de laden und per curl die relevante CSS-
Regel für die Navigation extrahieren), unser CSS entsprechend
korrigieren, committen und pushen.
