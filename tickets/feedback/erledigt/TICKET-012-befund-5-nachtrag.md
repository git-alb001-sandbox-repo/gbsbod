# Abnahmebefund TICKET-012, Nachtrag 5-N (offene Punkte aus Befund 5)

Verifikation von Befund 5 ergab: A–E sauber umgesetzt, aber
Punkt F nur teilweise – die Kategorie-2-Reparaturen fehlen.
Dieser Nachtrag schließt die Lücken. Funde aus Andreas'
Prüfung und Verifikation durch Vibe.

## A. Kategorie-2-Artefakte: URLs reparieren (aus 5F offen)

Gegen das ORIGINAL reparieren (Migrationsfehler, keine
originalen toten Links):

1. 2024-09-05.die-nicht-ganz-so-stillen-raeume.md:
   [Muslimische Studierenden Union](http://Muslimische
   Studierenden Union) – der LINKTEXT ist als URL eingesetzt;
   korrekten href aus dem Original übernehmen.
2. 2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md:
   Stuttgarter-Zeitung-URL mit angeklebtem Rest
   („…htmleidigen%20Islamunterricht") – URL-Ende und Linktext
   im Original prüfen und sauber trennen.
3. 2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-
   rechtsextremistisch.md: x.com-URL mit „%5C"-Artefakt
   („Alice%5C_Weidel" – vermutlich maskierter Unterstrich,
   der in die URL geleckt ist; korrekt: „Alice_Weidel").

## B. Neue Funde (gleiche Fehlerklassen)

1. 2023-07-10.ethikunterricht-…: literales „** **" mitten im
   fetten Einleitungsabsatz („…Kulturraum** **zugeordnet…") –
   Emphasis-Artefakt, gegen das Original korrigieren.
2. 2023-07-10.ethikunterricht-…: Verwaltungsgericht-Freiburg-
   URL mit „%20("-Anhang („…LISTPAGE=1215944%20(") – URL-
   Artefakt, gegen das Original korrigieren.
3. „wer-ist-hier-blind": ZWEI fehlerhafte Links der Form
   ![Bild](/assets/news/wer-ist-hier-blind-3.jpg) und
   ![Bild](/assets/news/wer-ist-hier-blind-4.jpg) – die
   Bild-Markdown-Syntax ist als Link im Text sichtbar statt
   als gerendertes Bild; Ursache im Entry prüfen (vermutlich
   verschachtelte/schadhafte Syntax aus der Konvertierung)
   und BEIDE Bilder korrekt einbinden.
4. 2018-12-18.interview-mit-prof-axel-meyer-uni-konstanz.md:
   URL `https://de.wikipedia.org/wiki/Axel_Meyer_(Biologe)` steht
   mit ROHEN Klammern im Markdown-Link – der Parser schneidet
   die URL bei der ersten `)` ab, der gerenderte Link ist defekt
   (Wikipedia 404). Korrektur: Klammern IMMER percent-encodieren
   (`%28Biologe%29`). ZUSÄTZlich: Im Teaser des Entries steht ein
   verwaistes `)` ohne öffnende Klammer („… Axel Meyer) ver-
   öffentlicht.") – gegen das Original korrigieren.
   HINWEIS REGRESSION: Der 4F-Fix (Encoding) wurde durch die
   Re-Konvertierung in Befund 5 überschrieben.

## C. Link-Report bereinigen (docs/link-check-befund-4.md)

1. Kategorie-1-Liste („echte tote Links"): bereits in Be-
   fund 4F korrigierte URLs (hpd-Links mit trailing %20,
   Wikipedia-Klammer-URL) aus der Entscheidungsliste ent-
   fernen oder als ERLEDIGT kennzeichnen – Andreas entscheidet
   nur noch über tatsächlich offene Funde.
2. 404-Liste konsistent mit dem Korrekturstand halten
   (gefundener Zustand vs. aktueller Zustand unterscheiden).

## D. Scan-Erweiterung (alle 107 Entries)

Zwei weitere Artefakt-Muster skriptgestützt scannen und
Fundstellen ausgeben, Treffer gegen das Original korrigieren:

1. Literale „** **"-Sequenz im Body-Text (Emphasis-Artefakt,
   siehe B1).
2. Im Text geleakte Bild-/Link-Syntax („![Bild](", „](http"
   als sichtbarer Text), siehe B3.
3. Markdown-Links mit ungecodierten Klammern ( oder ) in der
   URL (siehe B4) – alle gegen %28/%29 encodieren.

## E. Typografie (CSS, aus Andreas' Prüfung)

Der Fettdruck (font-weight 700) ist gut – unverändert lassen.
Lediglich die ERSTABSÄTZE direkt nach den Head-Bildern etwas
GRÖSSER setzen (font-size erhöhen, z. B. ~1.1em), damit sie
sich besser vom Haupttext abheben. Lead-Stil damit: fett +
leicht größere Schrift; betrifft alle News-Detail-Seiten
einheitlich über das Template, keine Einzelanpassungen.

## F. Prozessregel: Fixes in den Konverter, nicht nur in Dateien

Der Klammern-Fix aus Befund 4F ist durch die Re-Konvertierung
verloren gegangen, weil er nur in der DATEI, nicht in der
Konvertierungslogik saß. Künftig: Jede Korrekturregel (Klammer-
Encoding, &shy;, Leerzeichen nach Links, Bild-Syntax, Emphasis)
gehält als Regel IN DEN KONVERTER, damit Re-Konvertierungen
reproduzierbar sind und Fixes nicht rückgängig werden.
Verifikation nach jeder Re-Konvertierung: Stichproben gegen die
Liste bereits gefixter Fehlerklassen.

## Vorgehen

Ein Commit, push, Frontend-Build, Funktionstest gerendert im
Browser; Re-Scan mit den Mustern aus D muss danach 0 Treffer
liefern.

## Akzeptanzkriterien

- A1–A3 und B1–B3 gegen das Original korrigiert, gerendert
  geprüft (B3 zeigt das Bild, keinen Text-Link)
- C1–C2 umgesetzt, Entscheidungsliste für Andreas enthält
  nur noch offene Funde
- D-Scan mit 0 Treffern bestätigt
