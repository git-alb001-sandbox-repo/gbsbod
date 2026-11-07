# TICKET-024: IONOS-Live-Stand übernehmen (Andreas hat geliefert)

Andreas hat die Live-Dateien vom IONOS-Server in den geteilten
Ordner gelegt (VM hat KEINEN IONOS-Zugriff, Übernahme nur über
diese Ablage): sf_mount/ionos-live/htaccess.live.txt und
sf_mount/ionos-live/php-ini.live.txt

1. htaccess.live.txt gegen statamic-site/public/.htaccess im
   Repo diffen. Übernehmen (mit erklärendem Kommentar):
   - "Options +SymLinksIfOwnerMatch" vor RewriteEngine On
   - "RewriteBase /" nach RewriteEngine On
   Kommentar: "IONOS cgi-fcgi – ohne beide Zeilen 500 auf allen
   Rewrite-Requests. Live getestet 07.11."

2. Checkliste docs/DEPLOY-CHECKLISTE.md ergänzen:
   - Inbetriebnahme: artisan nur mit php8.3 (Shell-php ist
     PHP 4.4.9), Webserver-PHP 8.4
   - Inbetriebnahme ergänzen: stache:clear + view:clear
   - Diagnose-Abschnitt: php.ini-Muster aus php-ini.live.txt
     als Vorlage dokumentieren (Pfad als Platzhalter)

3. TICKET-023 klären: git status in der VM prüfen – falls die
   mobilen Slider-Änderungen an site.css uncommittet vorliegen:
   committen + pushen + render-Verifikation nachziehen
   (375/479/767 px, echte Slide-Bilder, Desktop-Regression
   ausgeschlossen, Screenshots in docs/). Falls nicht vor-
   handen: gemäß Ticketspezifikation umsetzen.

4. Alles committen + pushen. Kurzer Bericht, was 023 angeht
   (vorgefunden / umgesetzt / offen).
