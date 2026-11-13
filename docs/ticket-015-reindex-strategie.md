# TICKET-015: Reindex-Strategie für Produktion

## Problem

Der lokale Suchindex (Driver `local`, storage/statamic/search/*.json) wird
nur aktualisiert, wenn Entries über das Control Panel gespeichert werden.
Alle Entries wurden bisher als Dateien via CLI/Git geschrieben – am Index
vorbei. Ergebnis: Suche lieferte keine Treffer (TICKET-015).

## Festlegung

Reindex läuft über den Laravel-Scheduler:

- `routes/console.php` enthält:
  `Schedule::call(fn () => \Statamic\Facades\Search::index('default')->update())->hourly();`
  (SAPI-unabhängig – siehe IONOS-Hinweis unten; Stand TICKET-028 Befund 1)
- Lokal/VM: `php artisan schedule:run` (oder `php please schedule:run`)
  im Projektverzeichnis ausführen.

Damit ist sichergestellt, dass Datei-/Git-Änderungen am Content spätestens
nach einer Stunde im Suchindex landen; CP-Änderungen indizieren sofort
(UpdateItemIndexes bei Speichern über das CP).

## IONOS-Realität (TICKET-028 Befund 1, live verifiziert 13.11.2026)

Das Shell-`php8.3` auf IONOS ist die **CGI-Binary**
(`php_sapi_name()` = `cgi-fcgi`; erkennbar am `Content-type: text/html`-Echo
nach JEDEM artisan-Output). Folge: Laravel meldet `runningInConsole() = false`
und Statamic registriert die Search-Commands (`statamic:search:update`)
**nicht** – `artisan search:update`/`statamic:search:update` existieren auf
dem Server nicht ("no commands defined in the search namespace"), egal ob
mit oder ohne `schedule:run`.

**Fix: Umgebungs-Präfix PRO AUFRUF – niemals in `.env`** (Web-Requests dürfen
keinen Console-Modus melden!):

- Einmalig: `APP_RUNNING_IN_CONSOLE=true php8.3 artisan statamic:search:update`
- Stundencron auf IONOS (live seit 13.11.):

  ```
  15 * * * * cd /kunden/homepages/0/d892729985/htdocs/gbs-bodensee-27/statamic-site && APP_RUNNING_IN_CONSOLE=true /usr/bin/php8.3 artisan statamic:search:update >/dev/null 2>&1
  ```

Zusätzlich: `routes/console.php` nutzt seit TICKET-028 Befund 1
`Schedule::call(...Search::index('default')->update()...)` statt
`Schedule::command('search:update')` – ein direkter Facade-Aufruf ist
SAPI-unabhängig und greift auch, wenn `schedule:run` unter CGI läuft.

## Alternativen (dokumentiert, nicht gewählt)

- `search:update` nach jedem Content-Commit in der CLI ausführen: hohe
  Last bei häufigen Commits, abhängig vom Deployment-Flow – nicht gewählt.
- Externer Cron direkt auf den artisan-Befehl (stündlich): auf IONOS nur
  mit `APP_RUNNING_IN_CONSOLE=true`-Präfix wirksam (siehe oben) – gewählt
  als produktive Cron-Zeile.

## Hinweis IONOS-Deployment

Beim Einrichten des Cronjobs auf IONOS die korrekte PHP-Version und den
absoluten Pfad zur statamic-site verwenden; artisan-Befehle immer mit
`php8.3` UND `APP_RUNNING_IN_CONSOLE=true` aufrufen (CGI-SAPI, siehe oben).
