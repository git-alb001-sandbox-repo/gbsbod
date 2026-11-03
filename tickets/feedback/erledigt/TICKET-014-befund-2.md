# Abnahmebefund TICKET-014, Nr. 2 (Header-Höhe / vertikale Luft)

KLÄRUNG (Andreas, verbindlich): Die Header-Band-Höhe ist zu
groß. NICHT gefordert ist „exakt Footer-Höhe" – das 325-px-
Logo (171 px hoch) passt nicht in ~116 px Footer-Höhe.
Entscheidung: nur die vertikale LUFT reduzieren; das Band
sitzt fortan knapp ums Logo. Header- und Footer-Band bleiben
BEWUSST unterschiedlich hoch. Footer unverändert.

1. IST GERENDERT MESSEN (1920 px): Header-Band aktuell ~199 px
   (Logo 171 px + 28 px padding-block), Footer ~116 px –
   Werte dokumentieren.
2. UMBAU: padding-block des Header-Innencontainers von 14 px
   auf ~7 px je Seite reduzieren → Band ~185 px. min-height
   (--header-height 143 px) bleibt unterhalb, kein Konflikt.
   Sticky-Verhalten unverändert (115 px).
3. TREFF-BUTTON PRÜFEN: ragt 64 px aus der Header-Unterkante
   heraus – nach der Änderung weder abgeschnitten noch vom
   Slide-Inhalt verdeckt; ggf. margin nachziehen und
   dokumentieren.
4. VERIFIKATION GERENDERT: Vorher/Nachher-Screenshots bei
   1920 px mit gemessener Bandhöhe, Nachweis in docs/.
5. RESPONSIVE: Tablet/Mobile prüfen, Build + Funktionstest
   auf allen Seitentypen, Commit + push.

Akzeptanz: Header-Band ~185 px (Logo + ~7 px Luft je Seite),
Screenshots mit Maßen vorliegend, Treff-Button intakt,
Responsive ohne Überlagerungen, Footer unangetastet.
