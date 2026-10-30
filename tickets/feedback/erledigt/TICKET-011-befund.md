# Abnahmebefund TICKET-011 (Pilot-Darstellung)

Die drei Pilot-Meldungen sind überführt – die Karten-
Darstellung weicht noch von der Vorlage ab. Bitte präzise an
gbs-karlsruhe.de orientieren; alle Werte aus dem dortigen
CSS MESSEN und 1:1 übernehmen (nicht schätzen).

## 1. Karten-Überschriften: petrol statt grau

Die Meldungs-Überschriften erscheinen derzeit grau; bei
Karlsruhe sind sie petrol. Farbe (und Schriftschnitt, falls
abweichend) auf den gemessenen Karlsruher Wert ändern.

## 2. Teaser-Text: kleiner

Der Teaser-Text ist größer als bei Karlsruhe – bitte auf den
gemessenen Wert der Vorlage anpassen.

## 3. Datum: feiner

Das Datum erscheint bei Karlsruhe feiner (Größe, Gewicht
und/oder Farbe) – bitte messen und angleichen.

## 4. Dots nur bei fortgesetztem Satz

Die „…" am Ende des Teasers nur anzeigen, wenn der Teaser
NICHT mit einem Satzende („.") endet – die Dots deuten an,
dass der Satz weitergeht. Endet der Teaser mit „.", entfallen
sie komplett. (Template-Logik: Bedingung auf das letzte
Zeichen des Teaser-Texts.)

## 5. Referenz: Teaser Abdel-Samad

Der Teaser der Meldung von Hamed Abdel-Samad ist genau richtig
– diese Fassung ist der Referenzstandard: Länge, Schnitt und
Satzstruktur der übrigen Teaser daran angleichen.

## 6. Platzhalterbild

Wenn eine Meldung kein Bild hat, dann nimm das Platzhalterbild, 
das ich dir im Repo unter feedback bereitgestellt habe.

## Vorgehen

Commit, push, Frontend-Build, Funktionstest: alle drei Karten
mit gemessenen Karlsruher Werten, Dots-Logik an kurzen und an
mit „." endenden Teasern verifizieren.
