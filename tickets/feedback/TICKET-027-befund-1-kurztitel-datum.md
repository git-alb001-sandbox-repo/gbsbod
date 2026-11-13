# TICKET-027 BEFUND 1: Kurztitel fehlen + Datumsanzeige englisch ("Oct")

Andreas-Befund nach TICKET-027-Lieferung, zwei Punkte:

## 1. KARTENTITEL ZU LANG – card_title fehlt (4 neue Meldungen)

Die Karten zeigen die vollen Artikeltitel. Bestehende Praxis
(z. B. title: 'Religion und LGBTQ: Was entscheidet, ob Glaube
schützt oder schadet?' + card_title: 'Religion und LGBTQ'):
Lange Titel bekommen ein redaktionell gekürztes card_title,
kurze keins (Template-Fallback auf title).

Für die 4 neuen Wolber-Meldungen card_title setzen – Vibe-
Vorschläge als Orientierung, endgültig redaktionell entscheiden:

- Seelenfänger scheitern in Karlsruhe → kurz genug, kein
  card_title nötig
- Der Einfluss der abrahamitischen Religionen auf das
  Wirtschaftswachstum → z. B. 'Religionen und Wirtschaftswachstum'
- Kinderehen in Baden-Württemberg: 358 Fälle, nur acht Aufhebungen
  → z. B. 'Kinderehen in Baden-Württemberg' (Doppelpunkt-Kappung
  wie bei 'Religion und LGBTQ')
- Neue Sprachquoten und Gesichtsverschleierungsverbot an Schulen
  → z. B. 'Sprachquoten und Verschleierungsverbot'

**ZUKUNFTS-REGEL (in die eigene Redaktions-Doku in docs/
aufnehmen): Jede neue Meldung mit langem Titel erhält ein
redaktionell gekürztes card_title (Kartentitel) – Muster:
Kappung nach Doppelpunkt bzw. inhaltliche Verdichtung. Der
volle Titel bleibt im title-Feld für die Detailseite.**

## 2. DATUMSANZEIGE ENGLISCH – TEMPLATE-DEFEKT, ALLE Meldungen

Beobachtet an den 4 neuen Meldungen – ABER der Fehler liegt im
Template und trifft ALLE Einträge. Beweis (live): Karte und
Detailseite des ALTEN KI-Therapeuten zeigen "12. Oct. 2026",
auf /aktuelles ebenso "07. Oct. 2026" / "02. Oct. 2026".

Ursache: partials/news-card.antlers.html und news.antlers.html
nutzen {{ date format="d. M. Y" }} – PHP date()-Format "M"
liefert IMMER englische Monatskürzel, locale-unabhängig.

FIX (beide Stellen):
- Locale-fähige Datumsformatierung statt PHP date()-M nutzen
  (Statamic stellt locale-abhängige Datums-Modifier bereit,
  z. B. iso_format/localizedformat; Site-Locale ist de) –
  exakte Syntax nach eigener Prüfung
- AKTENZ: gerendert "12. Okt. 2026" – deutsche Monatskürzel,
  Tages-/Jahresformat wie bisher – auf Karten UND Detailseiten,
  für ALLE Einträge inkl. der 108 alten
- NICHT 12 hartkodierte Monatsnamen ins Template mappen

## VERIFIKATION (gerendert, VM)

- Karten /aktuelles: 4 neue Meldungen mit Kurztiteln, Datum
  mit deutschen Monatskürzeln (Nov./Okt.)
- Detailseiten: Datum deutsch; title-Feld unverändert (voller
  Artikeltitel bleibt)
- Alte Stichprobe (KI-Therapeut): Karte + Detail "12. Okt. 2026"
- Screenshots in docs/, Zukunfts-Regel in die Redaktions-Doku,
  Teilergebnisse sofort pushen

## DEPLOY-HINWEIS (nach Andreas-Abnahme, gebündelt)

Ein Deploy-Rundflug für alles: 4 neue .md + Bilder (content)
+ 2 Template-Dateien (code) + stache:clear + view:clear

## BEARBEITET (Vibe, 2026-11-13)

Beide Punkte umgesetzt und gepusht:

1. card_title gesetzt in 3 der 4 neuen Entries (nach Andreas-Vorschlag):
   'Religionen und Wirtschaftswachstum', 'Kinderehen in
   Baden-Württemberg', 'Sprachquoten und Verschleierungsverbot'.
   'Seelenfänger scheitern in Karlsruhe' ohne card_title (kurz genug).
   Zukunfts-Regel in docs/redaktions-doku.md aufgenommen.
   Commit dd517ec.
2. Datumsformat: news.antlers.html + partials/news-card.antlers.html
   von {{ date format="d. M. Y" }} auf {{ date iso_format="DD. MMM[.] YYYY" }}
   umgestellt (Carbon, Locale de) – rendert "12. Okt. 2026" statt
   "12. Oct. 2026", führende Null wie bisher, alle Einträge.
   Commit 4d63ea8.

Verifiziert gerendert (:8000, stache:clear + view:clear): Karten
/aktuelles mit Kurztiteln + de Datum, Detailseiten mit vollem Titel +
de Datum, Alt-Stichprobe KI-Therapeut "12. Okt. 2026". Screenshots:
docs/ticket-027-befund1-{aktuelles,ki-therapeut,kinderehen}-1920.png.
