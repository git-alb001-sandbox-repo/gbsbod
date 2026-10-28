# TICKET-005: Projektstruktur und Grundkonfiguration von statamic-site

## Voraussetzung
TICKET-004 abgeschlossen (Statamic läuft).

## Aufgabe
Das frische Skeleton in das gbsbod-Projekt überführen: 
Design-Tokens, Collections, Globals, Absicherung, Doku. 
NOCH keine fertigen Templates/Seiteninhalte.

## Schritte
1. Design-Tokens aus docs/design-inventur.md übernehmen: 
   statamic-site/resources/css/tokens.css mit den CSS Custom 
   Properties (Primär #006879, Akzent #BF3636, Hell-Petrol 
   #D3EFEF, Bitter/Epilogue, Container 1080px, Breakpoints).
2. .env.example anlegen (APP_KEY, APP_URL https://gbs-bodensee.de, 
   APP_DEBUG=false für späteres Live-Deployment als Kommentar), 
   echte .env bleibt gitignored.
3. Collections anlegen (leer, nur Blueprint-Grundgerüst) gemäß 
   Design-Inventur: news (Titel, Datum, Teaser, Bild, Inhalt), 
   termine (Datum, Titel, Ort, Teaser, Link), themen (Titel, 
   Beschreibung, Zielseite), verbindungen (Name, Logo, URL).
4. Globals anlegen: kontakt (Vereinsdaten aus Impressum der 
   alten Site), social_media, footer_links, spenden 
   (PayPal-Button-ID 3PVYRE2YCXN8N).
5. Mitgliedschafts-Regel dokumentieren in statamic-site/README.md: 
   Link auf hbbk-bodensee.org/mitglied-werden – externer Link, 
   KEIN Formular, KEIN PDF, KEIN Mail-Link im Statamic.
6. README.md ergänzen: Kurzbeschreibung, Start-Befehle.
7. Funktionstest: php please serve, Startseite ohne Fehler.
8. Commit (Message: "TICKET-005: Projektstruktur und 
   Grundkonfiguration"), pushen.

## Akzeptanzkriterien
- tokens.css mit allen Design-Tokens vorhanden
- Collections news/termine/themen/verbindungen + Globals angelegt
- .env.example im Git, .env nicht
- hbbk-Mitgliedschafts-Regel in README dokumentiert
- Statamic läuft weiterhin fehlerfrei
- Keine Änderungen außerhalb von statamic-site/ und tickets/
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
