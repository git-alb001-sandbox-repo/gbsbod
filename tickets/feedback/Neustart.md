Neustart nach abgestürzter Sitzung. Der Arbeitsbaum ist bereits
sortiert (site.css = fertiger TICKET-023-Fix, Content-Änderungen
sind von Andreas und zu behalten, composer bereits verworfen).

1. TICKET-023 VOLLSTÄNDIGEN (site.css enthält bereits Titel-
   weiß + Schatten; fehlt: der Scrim): Im ≤980px-Block hinter
   dem Slide-Content einen dezenten dunklen Verlauf ergänzen,
   z. B. linear-gradient von rgba(0,40,46,0.55) nach transparent,
   Richtung von unten, hinter dem Text, VOR dem Bild.
   Dann: Vite-Build, render-Verifikation 375/479/767 px mit den
   echten Slide-Bildern, Desktop-Regression ausgeschlossen,
   Screenshots nach docs/. Commit + push. Ticket -> done.

2. Content-Commit SEPARAT (Änderungen von Andreas, bereits im
   Working Tree): termine.md, naechstes_treffen.yaml,
   slider.yaml, trees/navigation/main.yaml, users/alb001@web.de
   Committen als "Content: Treffen 17.11., Slider-Text,
   Navigation, CP-Einstellungen (Andreas)". Push.

3. TICKET-024 ausführen (liegt im backlog): .htaccess um die
   zwei IONOS-Zeilen (Options +SymLinksIfOwnerMatch vor
   RewriteEngine On; RewriteBase / danach), DEPLOY-CHECKLISTE
   ergänzen (php8.3, stache/view-clear, php.ini-Tipp), push.
   Ticket -> done.

4. ZUSÄTZLICH: .gitignore um Regel für Statamic-Asset-Metas
   ergänzen: public/assets/**/.meta/ – die generierten
   .yaml-Metadaten sollen git status nicht mehr füllen.

ARBEITSREGEL: Nach JEDEM Teilschritt committen + pushen.
Fertigmeldung mit Nennung der geänderten Dateien. Content-
Änderungen NUR von Andreas, niemals eigenständig.
