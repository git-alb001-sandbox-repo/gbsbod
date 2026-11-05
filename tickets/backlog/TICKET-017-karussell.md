# TICKET-017: Karussell/Startseite fertigstellen (Slider-Optik wie RGs)

Vorgabe Andreas: Der Hero-Slider soll aussehen wie bei den
3 Referenz-RGs. Zwei beobachtete Abweichungen:

1. WEISSEN VERLAUF ENTFERNEN: Aktuell liegt ein weißer
   Gradient (linear, 82 %→0) über den Slider-Bildern. Bei
   den RGs erscheinen die Fotos OHNE Overlay. Das Overlay
   (.hero-slide-overlay) ersatzlos entfernen.

2. EINBLENDUNG WIE BEI DEN RGS: Titel/Text/Link sollen
   kurz nach Erscheinen des Hintergrundbilds links
   EINGEBLENDET werden (bei den RGs sichtbare Animation).
   VORBILD GERENDET MESSEN (nicht raten): Animationsart
   (fade/slide), Richtung, Dauer, Verzögerung nach Slide-
   Erscheinen, Easing – und insbesondere die LESBARKEITS-
   Lösung der RGs: Ohne weißen Verlauf brauchen Titel/Text/
   Link einen Kontrast auf dem Foto (vermutlich weiß +
   Text-Schatten o. ä. – exakt messen und übernehmen, auch
   Farbe/Weight/Stärke). Umsetzung als CSS-Animation an
   .hero-slide.is-active gekoppelt (kein zusätzliches JS),
   beim Slide-Wechsel neu triggern.

3. EMPTY-STATE: Solange der Slider-Global KEINE Slides
   enthält, wird die komplette Slider-Sektion ausgeblendet
   (aktuell: leerer 600-px-Kasten; JS entfernt dann nur
   Pfeile/Dots). Bedingung im partial:hero-slider bzw.
   home.antlers.html.

HINTERGRUND: slider.yaml ist aktuell leer (nur Titel) –
Andreas befüllt parallel über CP (Bilder: 1920 px breit,
JPEG ~80 %, unter ~400 KB; Motiv mittig-rechts, da Text
links liegt; keine Alt-Texte nötig). 3–5 Slides, Auto-
Rotation 6 s bleibt.

AKZEPTANZ: Kein weißer Verlauf mehr; Titel/Text/Link
erscheinen mit der gemessenen RG-Animation (Parameter im
Commit dokumentiert) und bleiben auf Fotos lesbar (RG-
Lösung 1:1 übernommen); leere Sektion erscheint nicht;
gerenderte Nachweis-Screenshots (leer, Animationsstart,
Animationsende, Slide-Wechsel); Build + Funktionstest,
Commit + push.
