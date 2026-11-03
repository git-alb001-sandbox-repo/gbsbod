# Abnahmebefund TICKET-012, Nachtrag 4 (Formatierungs- und Darstellungsfehler)

Vorbemerkung: Andreas hat bisher die NEUESTEN 12 der 107
Meldungen geprüft; die Restprüfung folgt nach diesem Befund.
Die gefundenen Fehler sind SYSTEMISCH – darum zuerst ein Scan
über ALLE 107 Entries, dann die Korrekturen.

## A. Systematischer Artefakt-Scan (alle 107 Entries)

Skriptgestützter Scan aller Entries auf die im Browser
gefundenen Muster; Ergebnis als Kandidatenliste (Datei +
Fundstelle) im migrations-log oder separatem Scan-Report:

1. Literale Sternchen im gerenderten Text (sichtbares `*`
   bzw. `**` statt Formatierung). Fundstellen u. a.:
   „Der Joker ist …" („*Cell Ownern *"), „Der typische
   Rechtsextremist …" („*Maria Melzer: *Rechtsextremismus",
   Überschrift „*Welche Methoden … *"), „Wissenschaftler
   rechtfertigen weibliche …" („**" am Absatzanfang)
2. Fehlendes Leerzeichen zwischen Link und Folgewort
   (z. B. „Birminghamschätzen", „Mitglied werdenfür",
   „GBS Bodenseein Kooperation")
3. Verschobene oder willkürlich abbrechende Kursivierung
   (z. B. erste Antwort von Kerstin Sischka)
4. Fette Veranstaltungsdaten („Wann:", „Wo:", „Eintritt:")
   mit Formatierungsartefakten („**Wann: **Samstag")

Alle Treffer gegen das ORIGINAL (alte Site) prüfen und den
Entry korrekt NEU KONVERTIEREN – nicht symptomweise flicken.
Die Meldung „Der typische Rechtsextremist …" ist in Text,
Sprechern, Zitat und Überschrift betroffen und komplett neu
aufzubauen.

## B. Interview-Format (alle Interview-Meldungen)

Im Original: Interview-Frage linksbündig, Antwort links-
bündig mit kleinem Einzug; die Sprecher-Kennzeichnung
(„hpd:" sofern vorhanden, „Kerstin Sischka:", „Maria
Melzer:") ist jeweils UMGEKEHRT zum Absatz gesetzt (kursiv/
nicht kursiv), um die Person abzuheben. Alle Meldungen mit
Interview-Struktur identifizieren (Suche nach „hpd:" und
Sprecher-Mustern) und so gegen das Original aufbauen.

## C. Zitat-Kästen

Zitate in Meldungen (Bezug: Kerstin-Sischka-Zitat) sind im
Original blau hinterlegte, optisch abgehobene Kästen –
aktuell kursiver Fließtext mit weitem Zeilenabstand.
Blockquote-Style der News-Detail-Seite am Original messen
(Farbe, Abstände, ggf. Rand) und nachbauen.

## D. Einleitende Bilder in voller Größe

Einleitende Bilder (Bild am Anfang der Meldung) in der
Detail-Ansicht NICHT zuschneiden, sondern in voller Größe
einblenden (Bezug: „Forbidden Moves" – Veranstaltungsplakat,
dessen wesentlicher Teil unten abgeschnitten wird). Die
Schnitt-Regel (object-fit/-position) gilt unverändert für
die KARTEN.

## E. Darstellungs-Feinschliff (CSS)

1. Footer-Hintergrund: var(--color-primary) wie der Header
   (statt --color-primary-dark).
2. Kontrast: normaler Text ein wenig HELLER, fetter Text
   ein wenig DUNKLER – überall, auch Überschriften.
   (Bewusste Verbesserung gegenüber den Vorlagen, bei denen
   das Problem ebenfalls existiert.)
3. Überschriften im Meldungstext: Abstandsverhältnis
   umkehren – mehr Abstand nach OBEN, weniger nach UNTEN
   (die Überschrift gehört zum nachfolgenden Absatz).

## F. Abschlusstest: Link-Check

ERST nachdem alle Formatierungsfehler behoben sind (auch die
aus Andreas' noch folgender Restprüfung): alle Links in allen
Meldungen automatisiert auf Funktion prüfen (curl je Link,
Nicht-200er und Redirects als Liste ausgeben).

## Vorgehen

Commits pro Themenblock, push, Frontend-Build, Funktionstest
gerendert im Browser. Danach setzt Andreas die Prüfung der
verbleibenden Meldungen fort; die Scan-Kandidatenliste
dient ihm dabei als Prüfhilfe.

## Akzeptanzkriterien

- Scan-Report vorliegend; alle Treffer gegen das Original
  korrigiert
- Interview-Struktur und Zitat-Kästen wie im Original
- CSS-Punkte E1–E3 umgesetzt; einleitende Bilder in voller
  Größe
- KEINE Abnahme des Tickets mit diesem Befund – die Rest-
  prüfung von Andreas läuft danach weiter
