# Abnahmebefund TICKET-012, Nachtrag 3 (Teaser-Inhalte und alte Links)

## 1. CTA-Text als Teaser identifiziert

Bei "Die Evolution des Denkens" (2024-01-31) lautet der
Teaser „Mitglied werdenfür nur 20 € Jahresbeitrag – gilt
auch schon für diese Veranstaltung!" – das ist der
Mitglieder-CTA aus dem alten Seitenfuß, kein inhaltlicher
Teaser. Bitte ALLE 107 Entries prüfen: Jeder Teaser, der
aus dem „Mitglied werden/Jahresbeitrag"-Muster (oder einem
anderen CTA-Text) besteht, ist durch den tatsächlichen
Lead-Absatz bzw. ersten Inhaltssatz der Meldung zu ersetzen
(aus dem Original, 1:1). Die „mind. 3 Zeilen"-Regel gilt
unverändert. Betroffene Fälle im migrations-log.md
nachtragen.

## 2. Interne Links auf die alte Domain

In migrierten Texten existieren Links auf gbs-bodensee.de
(alte Site), z. B. „Mitglied werden" →
/inhalt/aufklaerer-werden und „GBS Bodensee" → alte
Startseite. Bitte alle 107 Entries auf Links auf die alte
Domain prüfen und ersetzen:
- „Mitglied werden"-Links → externer Link zum
  hbbk-Mitgliedsformular (Pflicht-Regel)
- Links auf die eigene Organisation („GBS Bodensee") →
  Link auf die eigene neue Startseite (relativ)
- Andige alte Pfade → prüfen: neue Entsprechung oder
  Link entfernen (Text behalten)
- Ersetzungen im migrations-log.md dokumentieren

## Vorgehen

Commit, push, Frontend-Build, Funktionstest: Teaser- und
Link-Prüfung über alle 107 Entries, Stichproben im Browser.
