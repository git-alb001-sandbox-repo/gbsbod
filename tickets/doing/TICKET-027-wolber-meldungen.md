# TICKET-027: Neue Wolber-Meldungen von hpd.de übernehmen (4 Artikel)

Andreas-Auftrag (13.11.2026): Die Meldungen von Alexander Wolber auf
hpd.de, die NEUER sind als "Der KI-Therapeut", ins bestehende
Meldungsformat übertragen – in gleicher Reihenfolge und mit gleichem
Veröffentlichungsdatum wie auf hpd.de.

## QUELLE UND SCOPE (von Vibe vorrecherchiert)

Autorenseite: https://hpd.de/index.php/autor/alexander-wolber-22452
("Der KI-Therapeut" steht dort an 5. Position, neueste oben.)
Die 4 neueren Artikel in hpd-Reihenfolge (Datum = hpd-Zeitstempel):

1. Seelenfänger scheitern in Karlsruhe – 2026-11-10
   https://hpd.de/artikel/seelenfaenger-scheitern-karlsruhe-24554
2. Der Einfluss der abrahamitischen Religionen auf das
   Wirtschaftswachstum – 2026-11-04
   https://hpd.de/index.php/artikel/einfluss-abrahamitischen-religionen-wirtschaftswachstum-24538
3. Kinderehen in Baden-Württemberg: 358 Fälle, nur acht
   Aufhebungen – 2026-10-23
   https://hpd.de/index.php/artikel/kinderehen-baden-wuerttemberg-358-faelle-nur-acht-aufhebungen-24509
4. Neue Sprachquoten und Gesichtsverschleierungsverbot an Schulen –
   2026-10-20
   https://hpd.de/artikel/neue-sprachquoten-und-gesichtsverschleierungsverbot-an-schulen-24498

Duplikat-Check (Vibe gegen alle 108 vorhandenen Dateinamen): keines
der 4 existiert bereits – vor Beginn trotzdem kurz gegenprüfen
(Schlupfwort: auch Quelle/Historie der alten Drupal-Site beachten).

## FORMAT (Muster: content/collections/news/2026-10-12.der-ki-therapeut.md)

- Dateiname: {YYYY-MM-DD}.{slug}.md – Datum = hpd-Datum
- Frontmatter: id (UUID), blueprint: news, title, date: 'YYYY-MM-DD',
  teaser (Originalsätze aus dem hpd-Teaser), bild
- Body-Struktur exakt wie das Muster:
  1. Bildunterschrift kursiv mit Fotograf/CC-Credit als Markdown-Link
     (mit {: target="_blank" rel="noopener noreferrer"})
  2. Erstabsatz FETT = vollständiger hpd-Teaser-Text (Lead-Stil)
  3. Autorenzeile: **Alexander Wolber**
  4. Fließtext-Absätze aus dem Artikel – KEINE hart umbrochenen
     Zeilen (Regel aus 025-Nachtrag 2) – Links im etablierten
     {: target}-Stil, deutsche Anführungszeichen, &shy;-Regeln für
     lange Wörter, Leerzeichen zwischen Linktext und Folgewort
  5. Rote Regel aus TICKET-011/012: Emphasis-Konvertierung sauber –
     keine literalen * oder ** im gerenderten Text

## BILDER

- hpd-Artikelbilder per curl nach public/assets/news/{slug}-1.jpg,
  Caption/Credit wie im Muster übernehmen
- Artikel ohne Bild: etablierte placeholder-Regel für bildlose Karten
- .meta-Dateien nicht committen (bestehende gitignore-Regel)

## VERIFIKATION (gerendert, VM)

- /aktuelles: die 4 neuen Meldungen OBEN in hpd-Reihenfolge
  (11-10, 11-04, 10-23, 10-20); Tag-Gleichstand (04.11. mit
  bestehender Meldung) unbeachtlich – hpd-Vorgabe gilt fürs Datum
- Detail-Seiten: 200, Titel/Teaser/Bild/Caption korrekt,
  Silbentrennung, Sternchen-Artefakt-Scan über alle 4 neuen Entries
- Links im Text stichprobenartig auf Erreichbarkeit prüfen
  (Link-Check-Regel aus TICKET-012 Punkt 9, mit Fundstellenliste)
- Screenshots in docs/, Teilergebnisse sofort committen + pushen

## NICHT TEIL DES TICKETS

- Live-Deploy: erst nach Andreas-Abnahme – 4 .md-Dateien nach
  content/collections/news/ und Bilder nach public/assets/news/
  (reine Ergänzung, keine Überschreibungen), danach stache:clear;
  der Such-Index aktualisiert sich über den Stundencron von selbst

## ERLEDIGT / VERIFIKATION (Vibe, 2026-11-13)

Umgesetzt und gepusht (Commit 0dfb5d4):

- 4 News-Entries in content/collections/news/ (hpd-Datum = Dateiname):
  2026-11-10.seelenfaenger-scheitern-karlsruhe.md,
  2026-11-04.einfluss-abrahamitischen-religionen-wirtschaftswachstum.md,
  2026-10-23.kinderehen-baden-wuerttemberg-358-faelle-nur-acht-aufhebungen.md,
  2026-10-20.neue-sprachquoten-und-gesichtsverschleierungsverbot-an-schulen.md
- 4 Bilder in public/assets/news/{slug}-1.jpg (1200x800; das PNG des
  Kinderehen-Artikels nach JPEG konvertiert, Ticket-Vorgabe .jpg)
- Format wie Muster der-ki-therapeut: UUID, teaser = erster hpd-Teaser-
  satz, fetter Lead = vollständiger hpd-Teaser (og:description),
  Autorenzeile **Alexander Wolber**, Fließtext ohne harte Umbrüche,
  Links mit {: target="_blank" rel="noopener noreferrer"}, kursiv
  Bildunterschrift mit Fotograf/CC-Credit als Link. h2 des Kinderehen-
  Artikels als ## übernommen. Ein hpd-Tippfehler korrigiert
  (,des Islam‘ -> ‚des Islam‘). Duplikat-Check gegen 108 Dateinamen: negativ.

Verifikation (lokal gerendert, php artisan serve auf 127.0.0.1:8000,
stache:clear durchgeführt):

- /aktuelles Seite 1: 4 neue Meldungen OBEN in hpd-Reihenfolge
  (10.11., 04.11., 23.10., 20.10.); Tag-Gleichstand 04.11. mit
  bestehender Meldung "Die Wunderbrühe aus Okinawa" dazwischen –
  laut Ticket-Vorgabe unbeachtlich
- Detailseiten /meldung/{slug}: alle 4 HTTP 200, Titel korrekt
  ("… - gbs Bodensee"), Teaser, Bild, Caption, fetter Lead,
  Autorenzeile, h2 bei Kinderehen rendern korrekt
- Sternchen-Artefakt-Scan über alle 4 gerenderten Seiten: 0 literale *
  im sichtbaren Text; Emphasis (kursiv) rendert sauber
- Silbentrennung: hyphens:auto im Build-CSS aktiv (sichtbar in Karten)
- Link-Check (32 eindeutige URLs, curl mit Browser-UA): 31 x HTTP 200;
  1 x 403 bei stern.de (Bot-Schutz; Artikel-Existenz via Websuche
  verifiziert: "Italien beschließt Burka-Verbot und Sprachquote an
  Schulen", stern.de/news/...-38305042.html). Alle Artikel-Links im
  gerenderten HTML mit target="_blank" (wie Muster; nur Footer-Link
  ohne target)
- Screenshots in docs/: ticket-027-aktuelles-1920.png,
  ticket-027-{seelenfaenger,wirtschaftswachstum,kinderehen,sprachquoten}-1920.png

Status bleibt doing – Abnahme durch Andreas.
