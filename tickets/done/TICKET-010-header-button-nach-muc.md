# TICKET-010: Header-Button „Nächster Treff" im München-Stil

## Voraussetzung
TICKET-006 abgeschlossen und abgenommen (inkl. Befund-Punkte 1–3).

## Aufgabe
Den roten Spenden-Button im Header ersetzen durch einen Button
im Stil von gbs-muc.de („Nächster Stammtisch"):

- ragt aus der Unterkante des Headers heraus
- hat einen weißen Rand
- richtet sich beim Hover gerade aus (Rotation → 0°),
  der weiße Rand verschwindet dabei
- deutlich kleiner als der bisherige 150-px-Button: bitte
  Durchmesser, Schriftgröße und genaue Positionierung
  (Überstand unter dem Header) aus dem CSS von gbs-muc.de
  extrahieren und 1:1 übernehmen
- Beschriftung: „Nächster Treff" – gemischte Groß-/Klein-
  schreibung exakt wie bei München („Nächster Stammtisch"),
  KEINE Großbuchstaben-Umwandlung
- Link-Ziel: die Termine-Seite (/termine)

Der Spenden-Button entfällt damit aus dem Header. Die Spenden-
Sektion auf der Startseite bleibt davon unberührt (Global
spenden, siehe TICKET-008).

## Schritte
1. HTML/CSS von gbs-muc.de laden und die Button-Parameter
   extrahieren (Maße, Farben, Border, Rotation, Transition,
   Hover-Zustand, Position/Überstand).
2. Button-Partial bzw. Header-Partial anpassen, CSS in
   site.css (mit den extrahierten Werten, keine Schätzwerte).
3. Hover-Verhalten testen (gerade ausrichten + weißer Rand
   verschwindet), auch mobil prüfen.
4. Funktionstest: php please serve, Header rendert mit neuem
   Button, Link führt auf /termine.
5. Commit ("TICKET-010: Header-Button Nächster Treff"), pushen.

## Akzeptanzkriterien
- Button sieht aus wie in München (Maße, Rand, Position,
  Überstand), nur mit Text „Nächster Treff"
- Hover: richtet sich gerade aus, weißer Rand verschwindet
- Kein roter Spenden-Button mehr im Header
- Mobile Darstellung brauchbar
- Statuswechsel doing→done NUR nach manueller Prüfung durch
  Andreas
