# TICKET-013: Logo-Austausch

Neues Logo gbs-bodensee_logo_neg_rgb.svg ersetzt das bisherige
gbs-bodensee-logo.svg; der NEUE Dateiname ist zu verwenden.
Die Datei liegt bereits unter statamic-site/public/assets/
(korrigierte Version: Text in Pfade konvertiert, versteckte
Layer entfernt).

1. In der SVG das <color-profile>-Element aus den
   <defs> entfernen (ICC-Blob raus, ~10 KB leichter; keine
   optische Änderung)
2. Vorher alle Referenzen auf gbs-bodensee-logo.svg suchen
   (Templates, Partials, ggf. CSS) und Liste ausgeben
3. Alle Referenzen auf gbs-bodensee_logo_neg_rgb.svg umstellen
4. Alte Datei gbs-bodensee-logo.svg LÖSCHEN
5. Frontend-Build + Funktionstest: Logo gerendert auf allen
   Seiten (Header, Footer, Fehlerseiten), weißes Logo auf
   dunklem Grund lesbar, korrekte Skalierung
6. Commit + push

Akzeptanz: keine Referenz mehr auf den alten Namen, altes
Logo aus dem Repo entfernt, Logo überall sichtbar und
identisch gerendert.
