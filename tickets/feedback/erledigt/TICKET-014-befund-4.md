# Abnahmebefund TICKET-014, Nr. 4 (Stuttgart gerendert nachmessen)

Befund 3 ist umgesetzt, aber der Größenvergleich stimmt
noch nicht: Das Stuttgarter Logo erscheint KLEINER als
unseres, ihr Header-Band HÖHER.

URSACHEN-VERDACHT: Die Stuttgarter Referenzwerte (95 px
Desktop) wurden damals aus dem CSS gelesen (height:100px/
max-height:95px) – das ist ein CAP, keine gerenderte Größe.
Divi begrenzt das Logo vermutlich zusätzlich über die
Breite; die effektive Logo-Höhe ist kleiner als 95 px.
Verstärkte Verifikationsregel: Auch REFERENZ-Messungen er-
folgen GERENDERT – CSS-Werte sind keine Messwerte.

1. STUTTGART GERENDET MESSEN (1920-px-Viewport, Screenshot
   bzw. headless-Browser mit getBoundingClientRect):
   - Effektive gerenderte Logo-Höhe und -Breite
   - Header-Bandhöhe (Petrol-Balken von oben bis unten)
   - ggf. Sticky-Zustand analog
   Alle Werte dokumentieren; Abweichung zur CSS-Angabe
   (95 px) ausweisen.
2. EIGENEN ZUSTAND messen (gleiche Methode): Logo 95 px,
   Band 117 px – Deltas zu Stuttgart dokumentieren.
3. ANGLEICHEN:
   - Unsere Logo-Höhe auf Stuttgarts GERENDERTE Logo-Höhe
   - Unsere Header-Bandhöhe auf Stuttgarts GERENDERTE
     Bandhöhe (über padding-block; min-heights mit anpassen)
   - Sticky/Mobile-Werte proportional oder nach Stuttgart-
     Messung ableiten
   HINWEIS: Damit ist die Band-Gleichheit „Header = Footer"
   aus Befund 3 AUFGEHOBEN – Referenz für den Header ist
   jetzt Stuttgart. Footer bleibt unverändert.
4. NACHWEIS: Side-by-Side-Vergleich Stuttgart vs. uns bei
   1920 px (Screenshot mit Maßen), in docs/ ablegen;
   Logo-Optik und Bandhöhe müssen im Vergleich überein-
   stimmen (±5 px Toleranz).
5. Treff-Button-Überstand prüfen (Band wird höher –
   Position nachziehen, falls nötig). Responsive-Check.
6. Build + Funktionstest auf allen Seitentypen, Commit+push.

Akzeptanz: Logo-Höhe und Header-Bandhöhe entsprechen den
GERENDELTEN Stuttgarter Werten (Side-by-Side-Nachweis),
Messprotokoll in docs/, Treff-Button intakt, Responsive OK.
