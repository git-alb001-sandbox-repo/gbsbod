# Migrations-Log: News der alten Drupal-Site (TICKET-011/-012)

Pilot: 3 älteste Meldungen (TICKET-011), Vollmigration: restliche
105 Meldungen (TICKET-012). Gesamtstand: 108 Entries in der
Collection `news`, alle `published`, Original-Daten und -Slugs.

## Konventionen (für alle Meldungen)

- Dateiname `YYYY-MM-DD.<slug>.md`, Slug 1:1 aus der alten URL
- Detail-Text 1:1 aus `field-name-body` (HTML → Markdown), nicht
  umformuliert, nicht gekürzt; fette/kursive Auszeichnungen,
  Links (extern, neuer Tab) und Listen bleiben erhalten
- Bild-Unterschriften (figcaption) als kursiver Absatz erhalten
- Erste Bild im Body → `bild`-Feld (Karte + Detail-Top-Bild);
  weitere Bilder inline im Text; Datei-Anhänge als Download-Link
  am Textende
- Teaser: übernimmt, wo vorhanden, den fett gesetzten Lead-Absatz
  der alten Site (gekürzt an Satzgrenze, endet mit „."→ keine
  Dots); sonst erster Satz des Textes
- `card_title`: redaktionell gekürzt bei langen Titeln (keine
  Abschneide-Dots, max. 2–3 Zeilen, keine Info, die der Teaser
  schon enthält); 77 der 105 Meldungen haben einen card_title
- Drupal-Footer-Links „Drucken"/„Senden" wurden nicht übernommen
  (kein redaktioneller Inhalt)

## Auffälligkeiten und getroffene Annahmen

- **100-jahre-hans-albert-der-online-festakt-zum-geburtstag**
  (2021-02-08): Der Body der alten Seite enthält ausschließlich
  ein YouTube-iframe, keinen Text. Das Video wurde 1:1 als
  responsives iframe übernommen; Teaser redaktionell verfasst.
- **hochkaraetige-veranstaltung-zuerich** (2017-10-20): Body ist
  nur ein kurzer Kalender-Hinweis; Teaser redaktionell verfasst.
- Ohne fett markierten Lead-Absatz (Teaser daher redaktionell aus
  dem Inhalt formuliert): der-typische-rechtsextremist-existiert-
  nicht, die-psychologie-der-extremistischen-brueckennarrative,
  ermutigung-zur-strafanzeige, groesser-besser-hbbk,
  neue-hoffnung-fuer-die-entkriminalisierung-von-
  schwangerschaftsabbruechen, online-veranstaltung-ethik-statt-reli.
- **saekularitaet-als-wertebasierte-identitaet-vortrag-konstanz**
  (2025-06-16) sowie die Slugs mit Suffix `-0`/`-1` (beide
  2025-06-27): drei getrennte alte Drupal-Nodes mit identischem
  Titel zu derselben Vortragsreihe; 1:1 jeweils als eigene
  Meldungen übernommen (Slug-Suffixe wie auf der alten Site).
- 9 Meldungen ohne Bild → Platzhalterbild auf der Karte
  (Detail-Seite ohne Bild), siehe TICKET-011-Befund.
- Alle Bild-/Datei-Downloads (116 Bilder, 27 Anhänge) erfolgreich;
  keine fehlgeschlagenen Downloads.

Keine weiteren Auffälligkeiten.

## Nachtrag TICKET-012-Befund-2 (Teaser-Länge, Bildausschnitt)

- **Teaser mind. 3 Zeilen**: 20 zu kurze Teaser wurden ausschließlich
  mit Originalsätzen der jeweiligen Meldung verlängert (1:1). Drei
  Meldungen lassen sich ohne Erfindung nicht verlängern, da ihr
  Gesamttext bereits vollständig im Teaser steht bzw. nur aus
  einem Satz plus Link besteht:
  zentralrat-der-konfessionsfreien-freundeskreis,
  ukraine-fluechtlinge, religionszugehoerigkeit-weiter-abnehmend.
- **Bildausschnitt**: Neues Blueprint-Feld `bild_position`
  (object-position, Standard center, im CP je Eintrag einstellbar).
  Für alle 39 Hauptbilder, die im 8:5-Beschnitt signifikant oben
  beschnitten würden (Seitenverhältnis < 1,45 – Portraits,
  Personengruppen, Plakate, Buchcover), wurde `bild_position: top`
  gesetzt; so bleiben Köpfe bzw. Plakat-Titel im Bild. Betroffene
  Meldungen: bernd-vowinkel-wissen-statt-glauben, buchvorstellung-gott-kontrovers-was-noch-wuerde-zu-glauben-ist, bundesverfassungsgericht-zur-sterbehilfe, clergyproject-de-released, corinna-gekeler-konstanz, das-klerikale-kartell-warum-die-trennung-von-staat-und-kirche-ueberfaellig-ist, das-woke-phaenomen, der-preis-der-freiheit, die-afd-moechte-die-ns-zeit-entsorgen, die-evolution-des-denkens, dr-natalie-grams-homoeopathie-neu-gedacht-was-patienten-wirklich-hilft, ermutigung-zur-strafanzeige, erstmals-konstanz-forbidden-moves-tanzen-statt-tanzverbot, ethik-fuer-alle-vom-ersatzfach-zum-favoriten, ethikunterricht-grundschulen-baden-wuerttemberg, forbidden-moves-tanzen-statt-tanzverbot, gbs-bodensee-feiert-geburtstag, georg-elser-80-jahre-buergerbraeu-attentat, georg-elser-der-hitler-attentaeter, gewalt-und-religion, humanistischer-brunch-konstanz, irans-neuer-praesident-peseschkian-war-massgeblich-der-gewaltsamen-durchsetzung-des-hijab, ist-was-wir-wahrnehmen-wirklich-immer-wahr, kirche-macht-geld-welche-rolle-spielt-die-religion-im-saekularen-staat, kirchenrepublik-deutschland-christlicher-lobbyismus-0, kundgebung-am-muenster-konstanz-frauen-aktuelle-situation-im-iran, lange-nacht-der-wissenschaft-der-uni-konstanz-teil-1, neuer-missbrauchsfall-der-katholischen-kirche, onlinevortrag-prof-ruud-koopmans-soziologe-humboldt-uni-berlin, philipp-moeller-kommt, podcast-kritisches-denken-1, saekulare-buskampagne-2-0-kommt-auch-nach-konstanz, schottland-schafft-blasphemie-verbote-ab, tag-der-offenen-gesellschaft-im-cafe-mondial-konstanz, tilly-ausstellung-im-rheintorturm, ukraine-fluechtlinge, wahlpruefsteine-des-korso-zur-bundestagswahl-2017, widerstreit-ueber-macht-wahn-und-widerstand, wie-christlich-ist-konstanz-noch.
