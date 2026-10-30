# TICKET-012: Content-Migration – restliche 105 Meldungen

## Aufgabe

Die verbleibenden 105 Meldungen der alten Drupal-Site in die
Collection news überführen. Die Pipeline ist durch den
TICKET-011-Pilot validiert (3 älteste Meldungen vorhanden).

## Migrationsvorgaben (im Piloten validiert)

1. Je Meldung: Entry YYYY-MM-DD.<slug>.md (Original-Datum,
   alter Slug transliteriert), Status published.
2. Detail-Seite: Titel, Datum und Text 1:1 aus der alten
   Site – NICHT umformulieren, NICHT kürzen.
3. Karten-Titel (card_title): redaktionell kürzen – keine
   Abschneide-Dots, maximal 2–3 Zeilen, keine Information,
   die der Teaser bereits enthält (z. B. Ortsangaben).
4. Teaser: knapp (Referenz: die Abdel-Samad-Meldung aus dem
   Piloten). Dots nur, wenn der Teaser NICHT mit „." endet,
   und dann mit Leerzeichen davor („Text …").
5. Bilder: einheitliches Format (gemessene Pilot-Werte);
   ohne Bild → placeholder.svg auf der Karte, Detail-Seite
   bleibt ohne Bild.
6. Keine Template-/CSS-Änderungen in diesem Ticket – die
   Pilot-Darstellung gilt unverändert.

## Umgang mit Unklarheiten

Bei jeder Meldung, die nicht sauber extrahierbar ist
(fehlendes Datum, defektes HTML, unklare Autorenschaft):
NICHT eigenmächtig „reparieren" – Meldung trotzdem anlegen
und den Sachverhalt in docs/migrations-log.md vermerken
(Slug + Problem + getroffene Annahme).

## Funktionstest

- Gesamtzahl: 107 Entries (104 neu + 3 Pilot; ein Original-
  Duplikat vom 27.06.2025 nach Loeschung im Original entfernt)
- Sortierung neueste zuerst; Pagination auf /aktuelles
  (107/12 = 9 Seiten, letzte Seite 11 Karten)
- Stichproben: Bilder laden (200), Detail-Seiten erreichbar
- Kein card_title mit Abschneide-Dots

## Abnahme durch Andreas

- 5 zufällige Meldungen + die älteste und die neueste der
  Restmenge, wörtlich gegen die alte Site
- migrations-log.md vollständig sichten

## Akzeptanzkriterien

- 105 neue Entries, published, mit Original-Daten
- Migrationsvorgaben 1–5 für jeden Eintrag erfüllt
- migrations-log.md liegt vor (auch leer mit „keine
  Auffälligkeiten")
- Statuswechsel doing→done NUR nach Prüfung durch Andreas
