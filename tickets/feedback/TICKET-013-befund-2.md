# Abnahmebefund TICKET-013, Nr. 2 (Logo-Größe, Korrektur)

Befund 1 zeigte keine wirksame Änderung: Die Stuttgarter
Höhen-Referenz ist VERWORFEN (100→95 px war optisch
irrelevant; das Breitformat wirkt über die BREITE klein).

1. Logo-BREITE um 80 % vergrößern (gerenderte Breite × 1,8).
   Die Höhe folgt automatisch über das Seitenverhältnis
   (keine Verzerrung, nichts zuschneiden).
2. Layout-Konsequenzen prüfen: Der Header wird deutlich
   höher – Abstände zur Navigation, Sticky-Verhalten und
   Mobile-Breakpoints ansehen; falls das Layout auf schmalen
   Breiten bricht, dort eine verträglichere Skalierung wählen
   und DIESEN Kompromiss dokumentieren.
3. Frontend-Build + Funktionstest gerendert auf Desktop-
   und Mobile-Breite.
4. Commit + push.

Akzeptanz: Logo-Breite = 1,8 × Ausgangsbreite (Nachweis per
Vorher/Nachher-Maß), Layout bricht auf keiner Breite.
