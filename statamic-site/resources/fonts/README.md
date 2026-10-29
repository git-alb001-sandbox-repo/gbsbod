# Fonts (selbst gehostet)

woff2-Dateien für Bitter (Medium 500, SemiBold 600) und Epilogue (Bold 700),
latin + latin-ext, bezogen von Google Fonts (SIL Open Font License 1.1).

Wichtig: Die Bitter-woff2 sind Googles Variable-Font-Datei (wght 100–900),
identisch für 500 und 600. Die Nametabelle der Datei nennt deshalb die
Default-Instanz "Bitter Thin" – bei font-weight 500/600 rendern Browser
korrekt Medium/SemiBold (per fontTools-Instanz-Vergleich verifiziert,
byte-identisch mit den Google-Fonts-Originalen, TICKET-006-Abnahme).

Eingebunden via `@font-face` in `resources/css/site.css` – kein externer
Font-CDN. Die OEMF-Konvention der Referenz-Sites (self-hosted TTFs) wird
mit woff2 (kleiner, modernes Format) umgesetzt.
