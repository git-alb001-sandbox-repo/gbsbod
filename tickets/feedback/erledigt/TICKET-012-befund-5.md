# Abnahmebefund TICKET-012, Nachtrag 5 (Feinschliff nach Befund 4)

Vorbemerkung: Andreas hat die NEUESTEN 24 Meldungen geprüft;
Befund 4 hat viel verbessert. Dieser Nachtrag enthält Fein-
schliff und Korrekturen aus dieser Prüfung. KEINE Abnahme –
die Restprüfung (Meldung 25–107) läuft danach weiter.

## A. Typografie (CSS)

1. Fettdruck: font-weight erhöhen (z. B. strong/b auf 700),
   Farbe unverändert lassen; Haupttext NICHT heller setzen.
   Vorher MESSEN: Welches font-weight kommt gerendert an,
   und ist der Bold-Schnitt (700) der Fontfamilie über-
   haupt geladen (@font-face)? Ggf. 700er-Schnitt nachladen.
2. Silbentrennung im Fließtext: hyphens: auto für den
   Meldungstext; sicherstellen, dass lang="de" korrekt am
   <html>-Element hängt (sonst trennen Browser nicht oder
   nach falschen Regeln). &shy; nur für Sonderfälle.
3. Bildunterschriften: direkt an das Bild rücken (<figure>/
   <figcaption> mit engem Abstand statt Absatz-Abstand);
   auf allen Seiten prüfen. Beispiel: „wer-ist-hier-blind".

## B. Zitat- und Info-Boxen (UNTERSCHIEDLICHE Regeln)

1. Zitat-Boxen (mit Zitat): Text RECHTSBÜNDIG und KURSIV
   setzen.
2. Info-Boxen (blau, ohne Zitat, z. B. „Größer, besser,
   hbbk!"): unverändert linksbündig, normaler Fließtext –
   NICHT umbauen.

## C. Einzelfall-Korrekturen gegen das Original

1. „Größer, besser, hbbk!": In der blauen Box sind im
   Original nur 2 Absätze mit fortlaufendem Text. Die
   eingeführten künstlichen Zeilenumbrüche (auch direkt
   vor Satzende-Punkten) entfernen, Original-Zustand
   wiederherstellen.
2. „kriminalitaet-es-wird-immer-schlimmer-oder": In der
   blauen Box ging der Link „auf dem YouTube-Kanal der
   gbs Bodensee" verloren – gegen das Original wieder-
   herstellen.
3. „cancel-game-feministisch-religioeser-aktivismus-…":
   Erster Absatz („Die größte Videospieleplattform …") ist
   im Original unüblich formatiert und rendert zu groß –
   auf STANDARD-Erstabsatz-Formatierung normalisieren
   (fett, normale Größe). Bewusste Abweichung vom 1:1-
   Prinzip: kaputte/unübliche Original-Formatierung wird
   normalisiert statt reproduziert.

## D. Erweiterter Artefakt-Scan (alle 107 Entries)

Folgende NEUE Muster skriptgestützt über alle Entries
scannen (Ergänzung zum Scan aus Befund 4), Ergebnis als
Liste mit Fundstelle (Datei + Stelle):

1. „." am Zeilenanfang → künstlicher Zeilenumbruch
   (siehe C1); betroffene Absätze gegen das Original
   wiederherstellen.
2. Link-Zahlen-Differenz: Anzahl Links je Entry im Original
   vs. neu vergleichen; jede Differenz prüfen (verlorene
   Links wiederherstellen; bewusste Ersetzungen aus Be-
   fund 3 ausnehmen).
3. Ungewöhnlich große oder inline-formatierte Absätze
   (wie C3) finden und auf Standard normalisieren.
4. Karten-Titel, deren letzte Zeile nur 1–2 Zeichen
   enthält: mit &shy; sauber trennen (Beispiel: „Erster
   hpd-Journalistenpreis" → „Journalisten&shy;preis").

## E. Lange Akzent-Header (Urteilsregel)

Zu umfangreiche Akzent-Header automatisch erkennen und
inhaltlich sinnvoll auftrennen: Der prägnante Haupttitel
(z. B. „Don't feed the Lion!") bleibt Akzent-Header; der
erklärende Teil danach („Warum die Grünen und die Linke
endlich aufhören sollten, Politik für die AfD zu be-
treiben") wird wie ein Erstabsatz (fett) gesetzt, bleibt
aber ÜBER dem Header-Bild. ABER: Ergibt die Auftrennung
inhaltlich keinen Sinn, die Überschrift unverändert lassen
– keine erzwungene Trennung. Trennvorschläge als Liste
ausgeben; Andreas nimmt die Trennungen in seiner Prüfung ab.

## F. Link-Check-Report aus Befund 4F ergänzen

docs/link-check-befund-4.md ergänzen: Zu JEDEM Fund die
Fundstelle (Entry/Datei) angeben und die Fundpunkte in
drei Kategorien trennen:

1. Echte tote Links (bereits im Original kaputt, z. B.
   hpd-Artikel) – Liste an Andreas zur redaktionellen
   Entscheidung (Link entfernen? Text stehen lassen?).
2. Konvertierungsartefakte in URLs (Migrationsfehler,
   gegen das Original reparieren): z. B. „http://
   Muslimische Studierenden Union" (Linktext wurde zur
   URL), Stuttgarter-Zeitung-URL mit angeklebtem Rest
   („…htmleidigen%20Islamunterricht"), x.com-URL mit
   „%5C"-Artefakt.
3. Vermutliche Fehlalarme (403 = Bot-Schutz wie zeit.de;
   000 = verstorbene Domains) – per Browser-Stichprobe
   verifizieren und kennzeichnen, ob der Link im Original
   bereits tot war.

## Vorgehen

Commits pro Themenblock (A–F), push, Frontend-Build,
Funktionstest gerendert im Browser. Danach setzt Andreas
die Restprüfung (ab Meldung 25) fort; die Listen aus D2
und E sowie die F1-Entscheidungsliste dienen ihm als
Prüfhilfe.

## Akzeptanzkriterien

- A1–A3 und B1 umgesetzt; B2 unverändert gelassen
- C1–C3 gegen das Original korrigiert
- D-Scan-Report mit Fundstellen vorliegend, Treffer korrigiert
- E: nur inhaltlich sinnvolle Trennungen umgesetzt, Vorschlags-
  liste vorliegend
- F-Report mit Fundstellen und Kategorien vorliegend
- KEINE Ticket-Abnahme mit diesem Befund
