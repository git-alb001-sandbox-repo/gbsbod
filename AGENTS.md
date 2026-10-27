# AGENTS.md – Regeln für den KI-Agenten

## Projekt
Übungs-/Entwicklungsprojekt in einer isolierten Sandbox-VM (Linux Mint).
Ziel: KI-gestützte Entwicklung von Python-Skripten und Prototypen.

## Arbeitsweise
- Vor größeren Änderungen kurz den Plan nennen, dann umsetzen.
- Alle Änderungen über Git committen (aussagekräftige Messages, Deutsch).
- Keine Änderungen außerhalb dieses Projektordners.

## Genehmigungen
- Dateien im Projektordner: bearbeiten ohne Rückfrage.
- Installation neuer Pakete (pip/apt): vorher ankündigen.
- Löschen von Dateien oder `git push`: immer nachfragen.

## Konventionen
- Python 3.12, Virtualenvs pro Teilprojekt (`.venv/`).
- README.md pro Teilprojekt mit Kurzbeschreibung.

## Ticket-Workflow
- Agent bearbeitet NUR das aktuelle Ticket aus tickets/doing/.
- Vor Beginn: Ticket von backlog/ nach doing/ verschieben (git mv).
- Akzeptanzkriterien prüfen, aber: Statuswechsel doing→done ist 
  VERBOTEN ohne ausdrückliche Anweisung des Nutzers. Nach Erledigung 
  warten und den Nutzer zum manuellen Test auffordern.
- Keine Arbeiten außerhalb des aktuellen Tickets.
