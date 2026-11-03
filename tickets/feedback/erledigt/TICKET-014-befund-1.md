# Abnahmebefund TICKET-014, Nr. 1 (Header-/Footer-Inhaltsbreite)

KLÄRUNG (Andreas, verbindlich): Die Petrol-BALKEN von Header
und Footer laufen bereits über die volle Bildschirmbreite –
Full-Bleed stimmt, hier ist NICHTS zu ändern. Was vom
Vorbild abweicht: Der INHALT (Logo, Menü, CTA, Copyright,
Footer-Menü) sitzt eng in der Mitte zusammen; bei den RGs
ist der Inhalt fast über die ganze Breite verteilt.

1. VORBILD GERENDERT MESSEN (nicht aus dem CSS schließen!):
   Effektive Header-/Footer-Inhaltsbreite der 3 RGs bei
   1920-px-Viewport: Abstand linker Bildschirmrand bis linke
   Logo-Kante, rechte Inhaltskante bis rechter Rand; daraus
   die Inhaltsbreite je RG ableiten und dokumentieren.
2. EIGENEN ZUSTAND messen (gleiche Methode): bei uns aktuell
   1080 px (.container, --container-max).
3. UMBAU: Header- und Footer-INHALT auf die gemessene RG-
   Breite verbreitern – eigener Innen-Container für
   .site-header-inner/.site-footer-inner mit passendem
   max-width (z. B. 80 % oder der gemessene px-Wert). Der
   Haupt-Container für Seiteninhalt (.container im Main)
   BLEIBT unverändert bei 1080 px (Lesbarkeit Fließtext).
   Logo und Copyright hängen danach weiter außen als der
   Textanfang – gewollt, exakt wie bei den RGs.
4. VERIFIKATION GERENDERT: Vorher/Nachher-Screenshots bei
   1920 px; eigene Inhaltsbreite gegen den RG-Wert prüfen
   (±5 % Toleranz); Screenshots als Nachweis in docs/ ablegen.
5. RESPONSIVE: Tablet/Mobile prüfen – Seitenabstände des
   Inhalts beibehalten (nicht randnah kleben).
6. Build + Funktionstest auf allen Seitentypen, Commit + push.

VERIFIKATIONSREGEL (für alle künftigen Layout-Tickets):
Layout-Vorgaben werden IMMER am gerenderten Bild gemessen
(Screenshot + Pixelmaße), nie nur aus HTML/CSS-Struktur
geschlossen – „strukturell korrekt" ist keine Verifikation.

Akzeptanz: Header-/Footer-Inhalt so breit verteilt wie bei
den RGs (gemessener Nachweis), Haupttext-Container unver-
ändert 1080 px, Responsive intakt, Nachweis-Screenshots
vorliegend.
