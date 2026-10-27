# TICKET-002: Design-Inventur der GBS-Referenz-Websites

## Aufgabe
Die drei Referenz-Websites vollständig analysieren und als Grundlage 
für die gbsbod-Templates dokumentieren:
- gbs-karlsruhe.de
- gbs-stuttgart.de
- gbs-muc.de

## Schritte
1. Startseiten per curl laden. Struktur erfassen: Sektionen in 
   Reihenfolge (Hero-Slider, Aktuelles, Themen, Termine, Newsletter, 
   Verbindungen/Links, Spenden, Footer) mit kurzer Beschreibung je Block.
2. CSS-URLs identifizieren (href auf .css, auch @import), alle 
   Stylesheets herunterladen und analysieren.
3. Extrahieren: Farbwelt (Hex-Werte: Primär-, Sekundär-, Akzent), 
   Schriftfamilien + Größen-Hierarchie, Container-Breite, Breakpoints, 
   Header-Verhalten (sticky? Höhe?), Slider-Bibliothek.
4. Gemeinsamkeiten/Unterschiede der drei Sites tabellarisch 
   gegenüberstellen (welche Blöcke hat jede Site, welche identisch?).
5. Empfehlung für Statamic-Partials und Collections ableiten 
   (z. B. hero-slider, news-card, termin-list …).
6. Ergebnis als docs/design-inventur.md im Repo ablegen, committen 
   (Message: "TICKET-002: Design-Inventur der Referenz-Websites").

## Akzeptanzkriterien
- docs/design-inventur.md existiert mit: Struktur-Tabelle je Site, 
  Design-Tokens mit Hex-Werten und Schriftangaben inkl. Quellen-URL 
  je Stylesheet, Gegenüberstellung, Partials-Empfehlung
- Keine Änderungen an anderen Dateien außer docs/design-inventur.md
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas

