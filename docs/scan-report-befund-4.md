# Scan-Report TICKET-012 Befund 4 (Punkt A: Formatierungs-Artefakte)

Systematischer Scan aller 107 News-Entries auf sichtbare Formatierungs-Artefakte
(literale Sternchen, fehlendes Leerzeichen nach Links, verschobene Kursivierung),
gemessen am gerenderten HTML (league/commonmark, derselbe Parser wie Statamic).

## Methode

- Rohtext-Scan auf Sternchen an Leerzeichen-Grenzen und `](url)Buchstabe`
- Render-Scan: Body mit league/commonmark -> HTML, Suche nach sichtbaren `*`
  im Text (Gendersternchen `Wort*Wort` ausgenommen) und nach `</a>` direkt gefolgt
  von einem Buchstaben
- Alle Treffer gegen das Original (alte Drupal-Site, `gbs-bodensee.de/meldung/<slug>`)
  geprueft und die betroffenen Entries vollstaendig neu konvertiert (HTML -> Markdown,
  Stil der TICKET-011/012-Migration; Befund-3-Linkregeln mitangewendet)

## Kandidatenliste (Scan vor der Korrektur)

- 2017-04-09.hamed-abdel-samad-konstanz
- 2018-02-19.vorankuendigung-veranstaltungen-2018
- 2018-02-28.dr-natalie-grams-homoeopathie-neu-gedacht-was-patienten-wirklich-hilft
- 2018-04-15.corinna-gekeler-konstanz
- 2018-06-21.lange-nacht-der-wissenschaft-der-uni-konstanz-teil-1
- 2018-06-21.lange-nacht-der-wissenschaft-der-uni-konstanz-teil-2
- 2018-06-22.kirchenrepublik-deutschland-christlicher-lobbyismus-0
- 2018-07-01.tilly-ausstellung-im-rheintorturm
- 2018-09-21.bernd-vowinkel-wissen-statt-glauben
- 2018-10-29.ermutigung-zur-strafanzeige
- 2018-12-18.interview-mit-prof-axel-meyer-uni-konstanz
- 2019-07-05.ist-was-wir-wahrnehmen-wirklich-immer-wahr
- 2020-01-11.podcast-kritisches-denken
- 2020-04-28.schottland-schafft-blasphemie-verbote-ab
- 2021-06-26.onlinevortrag-prof-ruud-koopmans-soziologe-humboldt-uni-berlin
- 2021-07-14.widerstreit-ueber-macht-wahn-und-widerstand
- 2023-01-13.die-situation-der-frauen-im-iran
- 2023-02-16.kundgebung-am-muenster-konstanz-frauen-aktuelle-situation-im-iran
- 2023-03-14.gbs-bodensee-ist-jetzt-mitglied-im-zentralrat-der-konfessionsfreien
- 2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg
- 2023-09-06.gbs-bodensee-stand-auf-der-interkulturellen-woche
- 2023-10-23.armut-gefangenschaft-tod
- 2024-01-31.die-evolution-des-denkens
- 2024-02-03.das-klerikale-kartell-warum-die-trennung-von-staat-und-kirche-ueberfaellig-ist
- 2024-03-15.der-preis-der-freiheit
- 2024-03-16.das-woke-phaenomen
- 2024-05-24.tag-der-offenen-gesellschaft-im-cafe-mondial-konstanz
- 2024-06-03.rationale-islamdiskussion-statt-emotionale-debattenunkultur
- 2024-07-12.irans-neuer-praesident-peseschkian-war-massgeblich-der-gewaltsamen-durchsetzung-des-hijab
- 2024-08-22.ethik-fuer-alle-vom-ersatzfach-zum-favoriten
- 2024-09-05.die-nicht-ganz-so-stillen-raeume
- 2024-09-13.islamismus-eine-ernuechternde-bilanz
- 2024-10-01.die-maske-faellt
- 2024-11-05.wie-woke-sind-wir-erste-studien-veroeffentlicht
- 2024-11-28.konstanz-bahn-frei-fuer-das-humanistische-bildungs-und-begegnungszentrum
- 2025-03-25.erstmals-konstanz-forbidden-moves-tanzen-statt-tanzverbot
- 2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch
- 2025-06-18.warum-schwurbler-schwurbeln-die-rolle-der-core-knowledge
- 2025-07-25.erkenntnistheorie-verstaendlich-gemacht-warum-wir-kritisch-denken-muessen
- 2025-08-01.kinderbetreuung-mangelnde-selbstreflektion-und-pseudowissen
- 2025-09-08.japan-staerkt-menschenrechte-fuer-kinder-und-schwaecht-religioese-willkuer
- 2025-09-12.wo-ist-der-anstand
- 2025-10-06.erste-verleihung-des-hpd-journalistenpreises-zwei-sz-redakteure-und-einen-freien-autor
- 2025-10-07.die-homologie-von-stoerung-und-verschwoerung
- 2025-10-21.dont-feed-lion-warum-die-gruenen-und-die-linke-endlich-aufhoeren-sollten-politik-fuer-die
- 2025-11-06.wer-ist-hier-blind
- 2025-11-11.cancel-game-feministisch-religioeser-aktivismus-der-gamingindustrie
- 2025-11-19.kriminalitaet-es-wird-immer-schlimmer-oder
- 2025-12-04.die-psychologie-der-extremistischen-brueckennarrative
- 2025-12-29.die-afd-moechte-die-ns-zeit-entsorgen
- 2026-01-07.groesser-besser-hbbk
- 2026-01-12.wissenschaftler-rechtfertigen-weibliche-genitalverstuemmelung-eine-rezension
- 2026-03-13.forbidden-moves-tanzen-statt-tanzverbot
- 2026-03-17.der-joker-ist-kein-satanist
- 2026-06-02.der-typische-rechtsextremist-existiert-nicht
- 2026-06-25.rituelle-gewalt
- 2026-06-26.konstanzer-buerger-feierten-tag-der-offenen-gesellschaft
- 2026-07-23.die-evolutionspaedagogik-eine-pseudowissenschaft

insgesamt 58 Entries mit Artefakt-Treffern.

## Ergebnis nach Korrektur

Erneuter Scan ueber alle 107 Entries: **0 Treffer** (keine sichtbaren Sternchen,
keine Links ohne Leerzeichen; Gendersternchen bleiben wie im Original sichtbar).

Verbleibende bewusste Abweichungen vom Rohtext: keine.
