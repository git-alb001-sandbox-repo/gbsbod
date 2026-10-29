# TICKET-008: Startseite nach GBS-Design aufbauen

## Voraussetzung
TICKET-006 und 007 abgeschlossen.

## Aufgabe
Die Startseite mit den Sektionen des GBS-Designs aufbauen 
(Reihenfolge als Mischform aus den Referenz-Sites; Inhalte aus 
den Inhalts-Inventur-Pflichten):

## Schritte
1. Hero-Slider-Partial: 600 px Höhe, 3 Slides (Titel 36 px petrol 
   linksbündig, Text 18 px Bitter, Pfeile #D3EFEF, Hover #BF3636, 
   Auto-Rotation 6000 ms). Slides als Struktur-Feld der Startseite 
   oder Global `slider` (Bild, Titel, Text, Link). Einbindung: 
   Antlers-Loop, JS für Auto-Rotation (kein jQuery nötig).
2. Sektion „Aktuelle Meldungen": News-Grid (3 Karten) aus 
   Collection news (3 neueste Einträge; wenn leer: Platzhalter-
   Einträge im Draft-Status anlegen und im Template auf 
   published beschränken).
3. Sektion „Aktuelle Termine": Kalender-Teaser-Partial aus 
   TICKET-007 einbinden ({{ gbs_calendar_teaser }}).
4. Sektion „Beste Verbindungen": Logo-Raster aus Collection 
   verbindungen (8 Plätze; Platzhalter-Logos zulässig).
5. Sektion „Nichts mehr verpassen?": Newsletter-Block – vorerst 
   Mailto-Link an info@gbs-bodensee.de mit vorbefülltem Betreff 
   (wie bisherige Site; echtes Formular später separat).
6. Sektion „Mitglied werden": Text-Block mit externem Link auf 
   hbbk-bodensee.org/mitglied-werden (Pflicht-Regel: NUR der 
   Link, kein Formular/PDF/Mail-Link).
7. Sektion „Spenden": Aufruf-Text + Button (rot) auf PayPal-Link 
   aus Global spenden.
8. Zwischenüberschriften einheitlich als Partial section-heading 
   (H2 26 px Epilogue Bold).
9. Funktionstest im Browser inkl. mobiler Ansicht (≤767 px): 
   alle Sektionen sichtbar und lesbar.
10. Commit ("TICKET-008: Startseite mit GBS-Design-Sektionen"), 
    pushen.

## Akzeptanzkriterien
- Startseite zeigt: Hero-Slider, News-Grid, Kalender-Teaser, 
  Verbindungen, Newsletter, Mitglied-werden-Link (hbbk), Spenden
- Farben/Schriften/Größen entsprechen der Design-Inventur
- Kalender-Teaser rendert echte Termine
- Mobile Darstellung brauchbar
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
