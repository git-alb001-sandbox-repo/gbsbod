# Abnahmebefund TICKET-014, Nr. 3 (Logo-Größe + Bandhöhen, korrigiert)

VORGESCHICHTE: Befund 2 (Header-Padding 14→7 px) ist ausge-
führt. Die Stuttgarter Höhen-Referenz (TICKET-013/1) war
verworfen worden, weil die Logo-Datei transparente Ränder
enthielt – Andreas hat inzwischen eine ENG GESCHNITTENE
Neue erstellt (Seitenverhältnis ~2,38:1, Text als Pfade).
Damit ist die Höhen-Referenz wieder gültig. Das Logo rendert
bei unveränderter CSS-Breite (325 px → ~137 px Höhe) zu groß.

IST (bitte messen statt übernehmen): Logo breitengesteuert
325/240/180/140 px; padding-block Header 7 px; --header-
height 143 px als min-height AKTIV.

1. LOGO HÖHENGESTEUERT UMSTELLEN (Stuttgarter Referenz):
   - Desktop: Höhe 95 px (Breite automatisch ~226 px)
   - ≤980 px: 80 px (~190 px)
   - ≤767 px: 60 px (~143 px)
   - Sticky: 70 px (~166 px)
   Alle Breitenwerte (325/240/180/140) aus dem CSS entfernen.
2. MIN-HEIGHT ANPASSEN: --header-height (143 px) hält das
   Band künstlich hoch und verhindert die Verkleinerung –
   auf das Zielform anpassen oder die min-height-Logik so
   umbauen, dass die Bandhöhe aus Logo + Padding folgt.
   Ebenso sticky-min-height (115 px) und die Mobile-Mindest-
   höhen (100/80 px) mit den neuen Logo-Höhen abstimmen.
3. BANDHÖHEN MESSEN (gerendert, 1920 px): Erwartung –
   Header 95 px + 2×7 px = 109 px, Footer ~116 px. Beide
   Werte messen und dokumentieren.
4. BANDHÖHEN ANGLEICHEN (Andreas' ursprüngliche Vorgabe,
   jetzt erreichbar): padding-block so setzen, dass Header-
   Band und Footer-Band EXAKT gleich hoch sind (erwartet
   ~10 px je Seite; exakt aus der Messung ableiten).
   Treff-Button-Überstand prüfen (nicht abgeschnitten/
   verdeckt).
5. ICC-BLOB ENTFERNEN: Die neue SVG enthält wieder ein
   <color-profile>-Element in den <defs> – löschen.
6. VERIFIKATION GERENDERT: Vorher/Nachher-Screenshots bei
   1920 px mit Maßen (Logo-Höhe, Bandhöhen Header/Footer),
   Nachweis in docs/; Responsive-Check Mobile/Tablet.
7. Build + Funktionstest auf allen Seitentypen, Commit+push.

Akzeptanz: Logo-Höhen 95/80/60 px (sticky 70) gerendert
bestätigt, Header- und Footer-Band gleich hoch (gemessener
Nachweis), min-heights stören nicht, ICC entfernt, Treff-
Button intakt, Responsive ohne Überlagerungen.
