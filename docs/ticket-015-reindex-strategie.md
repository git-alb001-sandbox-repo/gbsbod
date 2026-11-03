# TICKET-015: Reindex-Strategie für Produktion

## Problem

Der lokale Suchindex (Driver `local`, storage/statamic/search/*.json) wird
nur aktualisiert, wenn Entries über das Control Panel gespeichert werden.
Alle Entries wurden bisher als Dateien via CLI/Git geschrieben – am Index
vorbei. Ergebnis: Suche lieferte keine Treffer (TICKET-015).

## Festlegung

Reindex läuft über den Laravel-Scheduler:

- `routes/console.php` enthält: `Schedule::command('search:update')->hourly();`
- Auf dem Produktionsserver (IONOS) minütlich per Cron aufrufen:

  ```
  * * * * * cd /pfad/zur/statamic-site && php please schedule:run >> /dev/null 2>&1
  ```

Damit ist sichergestellt, dass Datei-/Git-Änderungen am Content spätestens
nach einer Stunde im Suchindex landen; CP-Änderungen indizieren sofort
(UpdateItemIndexes bei Speichern über das CP).

## Alternativen (dokumentiert, nicht gewählt)

- `search:update` nach jedem Content-Commit in der CLI ausführen: hohe
  Last bei häufigen Commits, abhängig vom Deployment-Flow – nicht gewählt.
- Externer Cron direkt auf `php please search:update` (stündlich): ginge
  auch, aber `schedule:run` bündelt künftige weitere geplante Jobs an einer
  Stelle – gewählt.

## Hinweis IONOS-Deployment

Beim Einrichten des Cronjobs auf IONOS die korrekte PHP-Version und den
 absoluten Pfad zur statamic-site verwenden; `php please schedule:run` muss
im Projektverzeichnis ausgeführt werden.
