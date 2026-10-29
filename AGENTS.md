# AGENTS.md – Regeln für den KI-Agenten

## Projekt
GBS-Bodensee e. V. (Regionalgruppe der Giordano-Bruno-Stiftung) baut
seine Website gbs-bodensee.de neu. Bisher Drupal 7, künftig Statamic
(PHP/Laravel, Flat-File). Design-Vorlage sind die Regionalgruppen-Sites
gbs-muc.de, gbs-stuttgart.de und gbs-karlsruhe.de (WordPress, neues
GBS-Design). WordPress ist explizit keine Option.

## Arbeitsweise
- Vor größeren Änderungen kurz den Plan nennen, dann umsetzen.
- Alle Änderungen über Git committen (aussagekräftige Messages, Deutsch).
- Keine Änderungen außerhalb dieses Projektordners.

## Genehmigungen
- Entwicklungswerkzeuge dürfen nach ~/.local installiert werden 
  (z. B. portable Node/PHP-Versionen). Alles andere bleibt 
  außerhalb des Projektordners tabu.
- Alle Aktionen im Projektordner ohne Rückfrage: Dateien erstellen, 
  bearbeiten, verschieben, löschen, Commits und git push ausführen.
- Installation neuer Pakete (apt/pip/composer): vorher kurz ankündigen.
- EINZIGE Ausnahme: Statuswechsel doing→done nur auf ausdrückliche 
  Anweisung des Nutzers (bleibt die manuelle Abnahme).

## Konventionen
- Python 3.12, Virtualenvs pro Teilprojekt (`.venv/`).
- README.md pro Teilprojekt mit Kurzbeschreibung.
- PHP 8.x / Composer für Statamic (späteres Teilprojekt im Ordner
  `statamic-site/`).
- Keine Geheimnisse (Passwörter, Tokens) im Git – Konfiguration
  gehört in .env (gitignored).

## Ticket-Workflow
- Agent bearbeitet NUR das aktuelle Ticket aus tickets/doing/.
- Vor Beginn: Ticket von backlog/ nach doing/ verschieben (git mv).
- Akzeptanzkriterien prüfen, aber: Statuswechsel doing→done ist 
  VERBOTEN ohne ausdrückliche Anweisung des Nutzers. Nach Erledigung 
  warten und den Nutzer zum manuellen Test auffordern.
- Keine Arbeiten außerhalb des aktuellen Tickets.
