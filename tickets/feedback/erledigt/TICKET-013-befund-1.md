# Abnahmebefund TICKET-013, Nr. 1 (Logo-Größe)

Das neue Logo rendert sauber, erscheint aber ZU KLEIN. Die
anderen Regionalgruppen verwenden leicht unterschiedliche
Logo-Größen; REFERENZ ist die GBS Stuttgart (gbs-stuttgart.de).

1. VORBILD MESSEN: Gerenderte Logo-Höhe im Header von
   gbs-stuttgart.de (curl + HTML/CSS-Analyse, wie beim
   Karlsruhe-Vorbild für die Darstellung). Falls Stuttgart
   das Logo auch im Footer mit eigener Skalierung verwendet,
   beide Maße nehmen.
2. EIGENEN ZUSTAND MESSEN: Gerenderte Logo-Höhe im eigenen
   Header (und Footer) messen; Differenz dokumentieren.
3. ANPASSEN: Logo-Größe entsprechend der Stuttgarter Referenz
   erhöhen – gesteuert über die HÖHE (das neue Logo ist ein
   Breitformat, ~832×438, Verhältnis ca. 1,9:1; die Breite
   folgt aus dem Verhältnis und darf nicht verzerrt werden).
   Prüfen, dass das größere Logo das Header-Layout nicht
   umbricht (Abstände zur Navigation, CTA-Elemente).
4. RESPONSIVE PRÜFEN: Header mit dem größeren Logo auf
   Desktop- UND Mobile-Breite testen (Breakpoints); das Logo
   darf Navigation oder Suchfeld nicht verdrängen oder
   überlagern.
5. Frontend-Build + Funktionstest gerendert im Browser,
   Commit + push.

Akzeptanz: Gerenderte Logo-Höhe in Header (und Footer, falls
dort skaliert) entspricht der Stuttgarter Referenz; Layout
bricht auf keiner Breite, keine Überlagerungen.
