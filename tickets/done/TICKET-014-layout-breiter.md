# TICKET-014: Header/Footer-Breite + Footer-Umgestaltung

Vorbild: die 3 anderen Regionalgruppen (Stuttgart, München,
Karlsruhe).

1. VORBILD MESSEN: Header- und Footer-Balken der 3 RGs per
   curl + HTML/CSS-Analyse erheben (Full-Bleed-Muster,
   Breiten der inneren Content-Container).
2. HEADER + FOOTER AUF VOLLE BREITE: Beide Balken bei uns
   fast über die GESAMTE Bildschirmbreite laufen lassen
   (Hintergrund full-bleed), nicht auf die Text-Container-
   Breite beschränkt; der innere Inhalt bleibt zentriert und
   in der gewohnten Container-Breite. Eigenes CSS/Template
   entsprechend umbauen.
3. FOOTER-LOGO ENTFERNEN.
4. COPYRIGHT-ZEILE: Stattdessen eine Copyright-Zeile analog
   zu den anderen RGs – Formulierungen der 3 RGs erheben und
   die GBS-Bodensee-Zeile exakt an deren Muster angleichen
   (Jahr, Vereinsname, ggf. Zusatz wie die RGs).
5. RESPONSIVE PRÜFEN: Header/Footer auf schmalen Breiten
   (Mobile-Breakpoints), keine Überlagerungen.
6. Frontend-Build + Funktionstest auf allen Seitentypen
   (Start, News-Detail, Kalender, 404), Commit + push.

Akzeptanz: Header und Footer laufen auf allen Seiten fast
über die volle Bildschirmbreite (wie die 3 RGs), Footer ohne
Logo mit analoger Copyright-Zeile, Layout auf allen Breiten
und Seitentypen intakt.
