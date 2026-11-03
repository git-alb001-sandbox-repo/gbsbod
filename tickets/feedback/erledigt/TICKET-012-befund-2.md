# Abnahmebefund TICKET-012, Nachtrag (Teaser-Länge und Bild-Zuschnitt)

## 1. Teaser: mindestens 3 Zeilen

Der Teaser-Text soll NICHT WENIGER als 3 Zeilen umfassen.
Zu kurze Teaser bitte ergänzen – ausschließlich mit Sätzen
aus dem Originaltext der jeweiligen Meldung (NICHT
erfinden, NICHT umformulieren; 1:1-Prinzip gilt weiter).
Ziel: mind. 3 Zeilen im Karten-Layout. Die übrigen
Teaser-Regeln (knapp, Dots nur bei fortgesetztem Satz,
mit Leerzeichen) bleiben unverändert.

## 2. Bild-Zuschnitt: Köpfe werden abgeschnitten

Einige Teaser-Bilder schneiden Personen am oberen Bildrand
ab. Bitte ALLE 108 Teaser-Bilder sichten und in betroffenen
Fällen den Ausschnitt ändern:

- Pro Bild steuerbar machen (Blueprint-Feld, z. B.
  bild_position, Default „center"); für betroffene Bilder
  „top" bzw. einen passenden Prozentwert setzen
- Einheitliche Bildgröße und die gemessenen Formate bleiben
  unverändert – nur der Ausschnitt verschiebt sich
- Betroffene Bilder im migrations-log.md vermerken

## Vorgehen

Commit, push, Frontend-Build, Funktionstest: Karten mit
Personen-Bildern stichprobenartig kontrollieren, Teaser-
Länge über die Karten prüfen.
