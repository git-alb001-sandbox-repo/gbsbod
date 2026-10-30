# Abnahmebefund TICKET-010 (Termin-Seite /termine)

## 1. Fehlender Abstand unter dem Header

Die Seite /termine beginnt ohne vertikalen Abstand unter dem
Header; auf allen anderen Seiten ist er korrekt. Bitte den
Seitenabstand wie bei den übrigen Seiten herstellen (gleiches
Page-Layout/Padding verwenden).

## 2. Neuer Abschnitt „Nächstes Treffen" vor „Termine"

Oberhalb des Abschnitts „Termine" einen neuen Abschnitt
„Nächstes Treffen" einfügen (Überschrift wie üblich über das
section-heading-Partial) mit Platzhalter-Text (z. B. „Hier
steht in Kürze die Ankündigung unseres nächsten Treffens.").

WICHTIG: Der Text muss über das Statamic CP editierbar sein
(Feld im Seiten-Eintrag oder eigenes Global) – NICHT im
Template fest verdrahtet. Ich aktualisiere ihn später selbst
regelmäßig über das CP.

## 3. Text im Abschnitt „Termine" ersetzen

Statt „Unsere nächsten Veranstaltungen. Alle Termine der
Giordano-Bruno-Stiftung finden Sie im GBS-Kalender." soll dort
stehen: „Auszug aus dem GBS-Kalender."

## Vorgehen

Commit, push, Frontend-Build, Funktionstest (/termine mit
Header-Abstand, beide Abschnitte in der Reihenfolge
„Nächstes Treffen" vor „Termine", Text ersetzt, Button
unberührt).
