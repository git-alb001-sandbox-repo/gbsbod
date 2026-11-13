# TICKET-028: Wolber-Meldungen + Kurztitel + Datumsfix live stellen

Deploy-Runbook für Andreas (TICKET-027 inkl. Befund 1 von Vibe
verifiziert und abgenommen, 13.11.).
10 Dateien in einem Rundflug, kein Build nötig.

## 1. PAKET ERSTELLEN (VM-Terminal)

Q=~/ki-projekte/gbsbod/statamic-site
P=/media/sf_hostmount/deploy-028-live
mkdir -p $P/content/collections/news $P/public/assets/news $P/resources/views/partials
cp $Q/content/collections/news/2026-11-10.seelenfaenger-scheitern-karlsruhe.md \
   $Q/content/collections/news/2026-11-04.einfluss-abrahamitischen-religionen-wirtschaftswachstum.md \
   $Q/content/collections/news/2026-10-23.kinderehen-baden-wuerttemberg-358-faelle-nur-acht-aufhebungen.md \
   $Q/content/collections/news/2026-10-20.neue-sprachquoten-und-gesichtsverschleierungsverbot-an-schulen.md \
   $P/content/collections/news/
cp $Q/public/assets/news/seelenfaenger-scheitern-karlsruhe-1.jpg \
   $Q/public/assets/news/einfluss-abrahamitischen-religionen-wirtschaftswachstum-1.jpg \
   $Q/public/assets/news/kinderehen-baden-wuerttemberg-358-faelle-nur-acht-aufhebungen-1.jpg \
   $Q/public/assets/news/neue-sprachquoten-und-gesichtsverschleierungsverbot-an-schulen-1.jpg \
   $P/public/assets/news/
cp $Q/resources/views/partials/news-card.antlers.html $P/resources/views/partials/
cp $Q/resources/views/news.antlers.html $P/resources/views/

PAKET-KONTROLLE vor Upload:
grep -c card_title $P/content/collections/news/2026-10-20.neue-*.md
grep -c iso_format $P/resources/views/partials/news-card.antlers.html
grep -c iso_format $P/resources/views/news.antlers.html
(je 1)

## 2. UPLOAD (FileZilla)

- 4 .md   → content/collections/news/ (neu)
- 4 .jpg  → public/assets/news/ (neu)
- news-card.antlers.html → resources/views/partials/ (überschreiben)
- news.antlers.html      → resources/views/ (überschreiben)

## 3. GEGENPRÜFUNG (SSH, vor dem Cache!)

cd ~/gbs-bodensee-27/statamic-site
ls content/collections/news | grep -cE 'seelenfaenger|einfluss|kinderehen|sprachquoten'
ls public/assets/news | grep -cE 'seelenfaenger|einfluss|kinderehen|sprachquoten'
grep -c iso_format resources/views/partials/news-card.antlers.html
grep -c iso_format resources/views/news.antlers.html
(4, 4, 1, 1)

## 4. CACHE (nach der Gegenprüfung)

php8.3 artisan statamic:stache:clear
php8.3 artisan view:clear

## 5. BROWSER-KONTROLLE

- /aktuelles: 4 neue Karten oben (Reihenfolge 10.11. → 20.10.),
  Kurztitel, Datum "10. Nov. 2026" (deutsch!)
- Alte Karten: "12. Okt. 2026" statt "12. Oct. 2026"
- 4 Detailseiten: voller Titel, Bild, Caption, Wolber-Zeile
- Suchindex: kommt automatisch zur nächsten Stunde :15 (Cron)
  – oder sofort mit: php8.3 artisan search:update

## 6. VIBE-AUßENVERIFIKATION

Nach Deploy Bescheid geben – Vibe prüft Status, Titel,
Datumsformat und Suchindex von außen und schließt das Ticket.

## VIBE-VERMERK (2026-11-13, vor Deploy)

Runbook gegen das Repo verifiziert (lokal, Paket-Skript aus Schritt 1
mit lokalem Zielpfad ausgeführt):

- alle 10 Quelldateien existieren in statamic-site/ (4 .md, 4 .jpg,
  2 .antlers.html)
- cp-Skript läuft fehlerfrei; Paket enthält exakt 10 Dateien,
  byte-identisch mit den Repo-Dateien (diff/cmp)
- Paket-Kontrolle aus Schritt 1: grep card_title = 1, grep iso_format
  in news-card.antlers.html = 1, in news.antlers.html = 1
- erwartete Gegenprüfungswerte (4, 4, 1, 1) plausibel

Deploy selbst läuft in der VM durch Andreas (Schritte 1–5). Danach
folgt Schritt 6: Vibe-Außenverifikation, dann Status done.

## BEFUND 1 BEARBEITET (Vibe, 2026-11-13)

tickets/feedback/TICKET-028-befund-1-suche-ionos.md – repo-seitige
Reparaturen umgesetzt: routes/console.php auf SAPI-unabhängiges
Schedule::call(Search::index('default')->update()) umgestellt (lokal
verifiziert via schedule:list + Search-Update: 23x "kirche", 1x
"Seelenfänger"), Dokus ticket-015-reindex-strategie.md und
DEPLOY-CHECKLISTE.md um die IONOS-CGI-Realität ergänzt
(APP_RUNNING_IN_CONSOLE=true als Präfix pro Aufruf, nie in .env).
Commits 7806aeb + 3d8a3bc. Kein Deploy nötig für diese Änderungen.
