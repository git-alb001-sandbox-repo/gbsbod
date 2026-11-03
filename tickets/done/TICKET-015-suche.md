# TICKET-015: Suche reparieren (liefert keine Treffer)

Befund Andreas: Die Suche findet nichts – getestet ab
/meldungen; erwartet wurden Treffer aus allen Meldungen,
von den anderen Slugs entsprechend.

URSACHEN-DIAGNOSE (bereits erledigt, zur Orientierung):
config/statamic/search.php ist korrekt (Index „default",
Treiber local, searchables pages/news/themen/termine, Felder
title + content); search.antlers.html (/suche) fragt den
Index ab. VERDACHT: Der lokale Index wurde NIE GEBAUT – der
local-Driver aktualisiert nur bei Speichern über die Appli-
kation (CP); alle Entries wurden von der CLI als Dateien
geschrieben, am Index vorbei.

1. INDEX BAUEN: php please search:update ausführen.
   Treffertest mit bekannten Begriffen aus allen 4 Sammlungen
   (Meldungen, Themen, Termine, statische Seiten) – Test-
   protokoll mit Trefferzahlen in docs/ ablegen.
2. FELDER PRÜFEN/ERGÄNZEN: Bestätigen, dass der md-Inhalts-
   bereich der Entries als content indiziert wird; teaser in
   die indizierten Felder aufnehmen (title, content, teaser)
   und neu indizieren – sonst finden Treffersuchen am Teaser
   nichts.
3. REINDEX-STRATEGIE FÜR PRODUKTION festlegen und doku-
   mentieren: CP-Änderungen aktualisieren den Index automa-
   tisch, Datei-/Git-Änderungen NICHT. Deshalb: Cron/Scheduler
   mit search:update einrichten (Auswahl dokumentieren, damit
   beim IONOS-Deployment berücksichtigt) – oder die CLI führt
   search:update nach jedem Content-Commit aus.
4. VERIFIKATION GERENDET: /suche?q=… mit Begriffen aus allen
   Sammlungen zeigt Treffer; Treffer-Links führen auf die
   richtige Meldung/Seite; Umlaute und Sonderfälle testen
   („Hörsaal", „AfD", „Säkularität").
5. Build + Funktionstest, Commit + push.

Akzeptanz: Suche liefert Treffer aus allen 4 Sammlungen
(Protokoll vorliegend), Treffer-Links funktionieren, Reindex-
Strategie dokumentiert.
