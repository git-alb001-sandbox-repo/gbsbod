# TICKET-028 BEFUND 1: Such-Reindex auf IONOS – Befehl nie registriert (CGI-SAPI)

Bei der Live-Stellung (13.11.) fiel auf: `artisan search:update` UND
`statamic:search:update` existieren auf dem IONOS-Server nicht
("no commands defined in the search namespace"), obwohl die
Command-Dateien in vendor/statamic/cms/src/Search/Commands/ liegen.

## URSACHE (von Vibe aufgeklärt, live verifiziert)

IONOS' Shell-php (php8.3) ist die CGI-Binary (php_sapi_name() =
"cgi-fcgi"; erkennbar am "Content-type: text/html"-Echo nach JEDEM
artisan-Output). Laravel liefert deshalb runningInConsole() = false
(per Tinker verifiziert: bool(false)). Statamic 6.38 registriert die
Search-Befehle aber nur unter
if ($this->app->runningInConsole()) (src/Search/ServiceProvider.php)
→ statamic:search:insert/update wurden auf dem Server NIE registriert.

Folge: Der Stundencron (seit 09.11.) lief die ganze Zeit still ins
Leere; der Index hielt nur über CP-Speicherungen (UpdateItemIndexes)
und den Release-Zustand. Erstmals sichtbar betroffen: CLI-geschriebene
Entries (die 4 Wolber-Meldungen aus TICKET-027).

## LIVE-FIX (Andreas, extern verifiziert)

Präfix PRO AUFRUF – NICHT in .env (Web-Requests dürfen keinen
Console-Modus melden!):

- Einmalig: APP_RUNNING_IN_CONSOLE=true php8.3 artisan statamic:search:update
- Crontab: 15 * * * * cd /kunden/homepages/0/d892729985/htdocs/gbs-bodensee-27/statamic-site && APP_RUNNING_IN_CONSOLE=true /usr/bin/php8.3 artisan statamic:search:update >/dev/null 2>&1

Externe Verifikation (Vibe, 13.11.): alle 4 neuen Meldungen in der
Suche auffindbar, Alt-Bestand intakt (23 Treffer für "kirche").

## REPO-SEITIGE REPARATUREN

1. routes/console.php: `Schedule::command('search:update')->hourly()`
   referenziert einen nicht existenten Befehl (Signatur in 6.38 ist
   statamic:search:update) – der Scheduler war damit auch in der VM
   wirkungslos. Ersetzen durch Schedule::call (SAPI-unabhängig):
       Schedule::call(fn () => \Statamic\Facades\Search::index('default')->update())->hourly();
2. docs/ticket-015-reindex-strategie.md: IONOS-Realität ergänzen
   (CGI-SAPI, env-Präfix, korrekte Crontab-Zeile).
3. docs/DEPLOY-CHECKLISTE.md (Diagnose-Abschnitt): IONOS-Lehre –
   fehlen artisan-Befehle → mit APP_RUNNING_IN_CONSOLE=true präfixen;
   "Content-type:"-Echo = CGI-Binary im Spiel.
4. Commit + push. KEIN Deploy nötig: Der IONOS-Cron ist unabhängig
   gefixt; routes/ reist beim nächsten Code-Deploy mit.

## VERIFIKATION

- Vibe prüft die geänderten Stellen im Repo nach CLI-Fertigstellung.

## BEARBEITET (Vibe, 2026-11-13)

Repo-seitige Reparaturen umgesetzt und gepusht:

1. routes/console.php: `Schedule::command('search:update')->hourly()`
   ersetzt durch
   `Schedule::call(fn () => \Statamic\Facades\Search::index('default')->update())->hourly();`
   (Commit 7806aeb). Lokal verifiziert: `php -l` ok,
   `php artisan schedule:list` zeigt `0 * * * *  Closure at:
   routes/console.php:16`, und `Search::index('default')->update()` baut
   den Index lokal (23 Treffer "kirche", 1 Treffer "Seelenfänger").
2. docs/ticket-015-reindex-strategie.md: IONOS-Realität ergänzt
   (CGI-SAPI/cgi-fcgi, Content-type-Echo, runningInConsole()=false,
   APP_RUNNING_IN_CONSOLE=true als Präfix pro Aufruf – nie in .env,
   korrekte Crontab-Zeile vom 13.11.).
3. docs/DEPLOY-CHECKLISTE.md, Abschnitt 6 Diagnose: IONOS-Lehre ergänzt
   (fehlende artisan-Befehle → CGI-Binary, Präfix-Regel, Cron-Zeile,
   Schedule::call-Hinweis). Commit 3d8a3bc.

Kein Deploy nötig (IONOS-Cron unabhängig gefixt; routes/ reist beim
nächsten Code-Deploy mit).
