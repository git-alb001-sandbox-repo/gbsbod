# Link-Check TICKET-012 Befund 4 (Punkt F)

Automatisierter Check aller Links in allen 107 News-Meldungen (curl je Link;
interne Links gegen die lokale Statamic-Instanz, externe live).

Gesamt: 312 eindeutige Links.

## Ergebnis

- OK (200, kein Redirect): 239
- 403 (Bot-/Cordonschutz, z. B. zeit.de, wiley): 17
- 404 (kaputt): 18
- 000 (nicht erreichbar/Timeout): 7
- 503: 1
- 301: 19
- 302: 5

## 404 – kaputte Links (aus dem Original uebernommen, nicht eigenmaechtig umgebaut)

- https://de.wikipedia.org/wiki/Axel_Meyer_(Biologe
- https://gbs-stuttgart.de/content/ethikunterricht-grundschulen-baden-wuerttemberg
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_8_Chr_Gemeinschaftsschule.pdf
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_9_Bekenntnisschule_BW.pdf
- https://hpd.de/artikel/auch-imame-sollten-nicht-kosten-allgemeinheit-ausgebildet-werden-21823%20
- https://hpd.de/artikel/politischer-islam-durch-hintertuer-erste-absolventen-des-islamkollegs-deutschland-zertifiziert-21763%20
- https://hpd.de/artikel/stille-krise-erzieher-qualitaet-23190
- https://hpd.de/artikel/warum-schwurbler-schwurbeln-rolle-core-knowledge-23233
- https://offenegesellschaft.org/tdog/
- https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/ethikunterricht-kuenftig-ab-klasse-5
- https://www.bka.de/SharedDocs/Kurzmeldungen/DE/Kurzmeldungen/241210_Gewalt-Chat-Gruppen.html
- https://www.georg-elser-gedenkstaette.de/veranstaltungen-1/au%C3%9Ferhalb/konstanz-08-11-19/
- https://www.humanism.scot/what-we-do/policy-campaigns/end-blasphemy-petition/
- https://www.stuttgarter-nachrichten.de/inhalt.lka-longhorn-in-stuttgart-hier-wurde-am-karfreitag-trotzdem-getanzt-mit-ansage.8c1c5950-f1e5-4079-b117-0f5515a3200c.html
- https://www.stuttgarter-zeitung.de/inhalt.ethikunterricht-an-schulen-nur-im-schneckentempo.f619c87f-8a16-46e5-a382-8ac15dcadef4.html
- https://www.stuttgarter-zeitung.de/inhalt.kontroverse-ueber-islamischen-religionsunterricht-stuttgarter-schulleiter-verteidigen-islamunterricht.add1d828-4299-4ad7-b94f-9fe2152acfb2.htmleidigen%20Islamunterricht
- https://www.stuttgarter-zeitung.de/inhalt.streit-um-islamtheologie-islamunterricht-vor-dem-aus.3cdf5488-7db8-4b31-90da-8e3d41db1033.html
- https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2025/pressemitteilung-2025-05-02.html

## 000 – nicht erreichbar

- http://bildungsbude.org/events/georg-elser-der-hitler-attentaeter/
- http://m.suedkurier.de/region/kreis-konstanz/konstanz/Neue-humanistische-Gruppe-in-Konstanz;art372448,9372627
- http://Muslimische Studierenden Union
- https://ak-schulfach-ethik.de
- https://clergyproject.de/
- https://elinor.network/gastfreundschaft-ukraine/
- https://giordano-bruno-stiftung.de/meldung/deutschlandweite-strafanzeigen

## 403 – Bot-Schutz (Seite existiert vermutlich)

- https://bmjopen.bmj.com/content/4/11/e006316.full
- https://jme.bmj.com/content/early/2025/12/14/jme-2025-110961
- https://journals.sagepub.com/doi/10.1177/17456916241252085
- https://journals.sagepub.com/doi/full/10.1177/00846724241235181
- https://onlinelibrary.wiley.com/doi/full/10.1111/sjop.13018
- https://pixabay.com/de/service/terms/?fbclid=IwAR1qY94mOah3sHONFtSnJd6e2Yf4i1YqF7C31RJr7IRIFQY8SHXG0u9A6L8#license
- https://www.consilium.europa.eu/de/infographics/terrorism-eu-facts-figures/
- https://www.die-bibel.de/ressourcen/wirelex/10-lernorte-und-institutionen-religioeser-bildung/raeume-der-stille
- https://www.gew-bw.de/index.php?eID=dumpFile&amp;t=f&amp;f=129215&amp;token=b4bd139903b01b8545048c05ea1c8d79af95b336&amp;sdownload=&amp;n=bundw-11-22-WEB.pdf
- https://www.kas.de/de/einzeltitel/-/content/die-entwicklung-nihilistischer-gewalt
- https://www.mdpi.com/2077-1444/9/2/37#B27-religions-09-00037
- https://www.osiander.de/veranstaltungen/konstanz.cfm?evt_id=3055
- https://www.sueddeutsche.de/wirtschaft/esoterik-wer-am-geschaeft-mit-dem-seelenheil-verdient-1.3596195
- https://www.zeit.de/2020/53/religionsunterricht-kirchen-christentum-glauben-saekularisierung/komplettansicht
- https://www.zeit.de/digital/2026-01/kuenstliche-intelligenz-suizid-character-ai-google-vergleich-gxe
- https://www.zeit.de/gesellschaft/schule/2023-03/religionsunterricht-abschaffung-schule-religionskunde
- https://x.com/Alice%5C_Weidel/status/1918254947201638587

## Redirects (200 nach Redirect) – Uebersicht, technisch OK


## Korrigiert vor dem Check: trailing `%20` in zwei hpd-Links entfernt
(die-maske-faellt), Wikipedia-Link Axel_Meyer Klammern encodiert (%28/%29).

## Ergänzung Befund 5F: Fundstellen und Kategorien

### Kategorie 2: Konvertierungsartefakte in URLs (Migrationsfehler – gegen Original reparieren)

- http://Muslimische Studierenden Union  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.stuttgarter-zeitung.de/inhalt.kontroverse-ueber-islamischen-religionsunterricht-stuttgarter-schulleiter-verteidigen-islamunterricht.add1d828-4299-4ad7-b94f-9fe2152acfb2.htmleidigen%20Islamunterricht  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md

### Kategorie 1: echte tote Links (im Original bereits kaputt) – Entscheidung Andreas

- http://bildungsbude.org/events/georg-elser-der-hitler-attentaeter/ (HTTP 000)  ->  2021-09-25.georg-elser-der-hitler-attentaeter.md
- http://m.suedkurier.de/region/kreis-konstanz/konstanz/Neue-humanistische-Gruppe-in-Konstanz;art372448,9372627 (HTTP 000)  ->  2017-08-16.neue-humanistische-gruppe-konstanz.md
- https://ak-schulfach-ethik.de (HTTP 000)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://clergyproject.de/ (HTTP 000)  ->  2018-06-30.clergyproject-de-released.md
- https://elinor.network/gastfreundschaft-ukraine/ (HTTP 000)  ->  2022-02-28.ukraine-fluechtlinge.md
- https://giordano-bruno-stiftung.de/meldung/deutschlandweite-strafanzeigen (HTTP 000)  ->  2018-10-29.ermutigung-zur-strafanzeige.md
- http://campuls.online/hochschulleben/muslimisches-leben-in-konstanz-2-im-interview-mit-dem-vorstand-der-muslimischen-hochschulgruppe/ (HTTP 301)  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.kantine-kn.de/kontakt/ (HTTP 301)  ->  2026-03-13.forbidden-moves-tanzen-statt-tanzverbot.md
- https://km-bw.de/site/pbs-bw-km-root/get/documents_E-954467378/KULTUS.Dachmandant/KULTUS/KM-Homepage/Pressemitteilungen/Pressemitteilungen%202015/2015%2010%2012%20Liste%20Standorte%20Islamischer%20Religionsunterrichte.pdf (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://schlussmachen.jetzt/ (HTTP 301)  ->  2019-04-07.saekulare-buskampagne-2-0-kommt-auch-nach-konstanz.md
- https://www.saekulare-migrantinnen.com/unser-team (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://www.charta-der-vielfalt.de/ (HTTP 301)  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.deutschlandfunk.de/gewaltbereitschaft-durch-religion-wenn-koran-und-bibel.886.de.html?dram:article_id=497370 (HTTP 301)  ->  2021-06-26.onlinevortrag-prof-ruud-koopmans-soziologe-humboldt-uni-berlin.md
- https://www.katholisch.de/aktuelles/aktuelle-artikel/missbrauch-das-sind-die-zahlen-aus-den-bistumern (HTTP 301)  ->  2018-10-29.ermutigung-zur-strafanzeige.md
- https://www.mdr.de/nachrichten/thueringen/verfassungsschutz-afd-beobachtung-100.html (HTTP 301)  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- https://www.tagesschau.de/inland/regional/hamburg/islamisches-zentrum-hamburg-102.html (HTTP 301)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.seemoz.de/ich-lese-seemoz/testimonials/in-eigener-sache-seemoz-e-v-legt-los-2/ (HTTP 301)  ->  2018-04-15.corinna-gekeler-konstanz.md
- https://www.stuttgarter-zeitung.de/inhalt.lessing-schulen-in-stuttgart-wie-im-hallschlag-um-schueler-geworben-wird.1aeb37fd-51fb-40d6-a0ab-d332810f2b16.html (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://www.suedkurier.de/region/kreis-konstanz/konstanz/Islamkritiker-Abdel-Samad-kommt-doch;art372448,9244386 (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- http://www.theaterkonstanz.de/tkn/service/04368/index.html (HTTP 301)  ->  2019-05-10.kirche-macht-geld-welche-rolle-spielt-die-religion-im-saekularen-staat.md
- http://www.vhs-konstanz-singen.de/index.php?id=54&kathaupt=11&knr=171-10471&katid= (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- http://www.vhs-konstanz-singen.de/index.php?id=54&kathaupt=11&knr=171-10471&katid (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- https://www.welt.de/politik/deutschland/article154689954/So-naehren-Erdogans-Prediger-Islamismus-in-Deutschland.html (HTTP 301)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- http://zebra-kino.de/ (HTTP 301)  ->  2024-03-15.der-preis-der-freiheit.md
- https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/kommissionsbericht-reproduktive-selbstbestimmung-pm-15-04-24.html (HTTP 301)  ->  2025-04-01.neue-hoffnung-fuer-die-entkriminalisierung-von-schwangerschaftsabbruechen.md
- https://barnsteiner-film.de/ (HTTP 302)  ->  2025-11-06.wer-ist-hier-blind.md
- https://www.google.com/maps/place/Katzgasse+7,+78462+Konstanz,+Deutschland/@47.663483,9.174543,14z/data=!4m5!3m4!1s0x479af71d540a1819:0x47c691670653b416!8m2!3d47.6634833!4d9.1745432?hl=de (HTTP 302)  ->  2018-02-28.dr-natalie-grams-homoeopathie-neu-gedacht-was-patienten-wirklich-hilft.md
- https://www.google.de/maps/place/B%C3%BCrgersaal+Konstanz/@47.6610429,9.1719947,16z/data=!4m5!3m4!1s0x479af6e284ff92ff:0x50dfa013d4d0c880!8m2!3d47.6618397!4d9.173052 (HTTP 302)  ->  2018-04-15.corinna-gekeler-konstanz.md
- https://www.fdp-waldbroel.de/fdp-kritisiert-verlaengerung-des-islamischen-religionsunterrichts (HTTP 302)  ->  2024-10-01.die-maske-faellt.md
- https://m.youtube.com/watch?v=F8ETNGn0tcA (HTTP 302)  ->  2023-10-23.armut-gefangenschaft-tod.md
- https://youtu.be/UHEUNXv8M7U (HTTP 303)  ->  2021-04-26.das-lesen-eines-buchs-ist-durch-nichts-zu-ersetzen-ausser-durch-das-lesen-eines-buchs.md
- https://unsplash.com/license (HTTP 307)  ->  2026-10-02.religion-und-lgbtq-was-entscheidet-ob-glaube-schuetzt-oder-schadet.md
- https://www.bmi.bund.de/DE/themen/verfassung/parteienrecht/parteiverbot/parteiverbot-node.html#::text=In%20der%20Geschichte%20der%20Bundesrepublik%20Deutschland%20hat,Deutschlands%20(%20KPD%20 (HTTP 307)  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- https://www.elk-wue.de/leben/bildung-und-kultur/religionsunterricht (HTTP 307)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.zdf.de/nachrichten/politik/ausland/us-feministin-judith-butler-terror-hamas-israel-100.html (HTTP 308)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.zdf.de/nachrichten/politik/chronologie-anschlaege-islamismus-deutschland-100.html (HTTP 308)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://de.wikipedia.org/wiki/Axel_Meyer_(Biologe (HTTP 404)  ->  2018-12-18.interview-mit-prof-axel-meyer-uni-konstanz.md
- https://gbs-stuttgart.de/content/ethikunterricht-grundschulen-baden-wuerttemberg (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_8_Chr_Gemeinschaftsschule.pdf (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_9_Bekenntnisschule_BW.pdf (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://hpd.de/artikel/auch-imame-sollten-nicht-kosten-allgemeinheit-ausgebildet-werden-21823%20 (HTTP 404)  ->  2024-10-01.die-maske-faellt.md
- https://hpd.de/artikel/politischer-islam-durch-hintertuer-erste-absolventen-des-islamkollegs-deutschland-zertifiziert-21763%20 (HTTP 404)  ->  2024-10-01.die-maske-faellt.md
- https://hpd.de/artikel/stille-krise-erzieher-qualitaet-23190 (HTTP 404)  ->  2025-08-01.kinderbetreuung-mangelnde-selbstreflektion-und-pseudowissen.md
- https://hpd.de/artikel/warum-schwurbler-schwurbeln-rolle-core-knowledge-23233 (HTTP 404)  ->  2025-10-07.die-homologie-von-stoerung-und-verschwoerung.md
- https://offenegesellschaft.org/tdog/ (HTTP 404)  ->  2024-05-24.tag-der-offenen-gesellschaft-im-cafe-mondial-konstanz.md
- https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/ethikunterricht-kuenftig-ab-klasse-5 (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.bka.de/SharedDocs/Kurzmeldungen/DE/Kurzmeldungen/241210_Gewalt-Chat-Gruppen.html (HTTP 404)  ->  2026-03-17.der-joker-ist-kein-satanist.md
- https://www.georg-elser-gedenkstaette.de/veranstaltungen-1/au%C3%9Ferhalb/konstanz-08-11-19/ (HTTP 404)  ->  2019-11-03.georg-elser-allein-gegen-hitler.md
- https://www.humanism.scot/what-we-do/policy-campaigns/end-blasphemy-petition/ (HTTP 404)  ->  2020-04-28.schottland-schafft-blasphemie-verbote-ab.md
- https://www.stuttgarter-nachrichten.de/inhalt.lka-longhorn-in-stuttgart-hier-wurde-am-karfreitag-trotzdem-getanzt-mit-ansage.8c1c5950-f1e5-4079-b117-0f5515a3200c.html (HTTP 404)  ->  2023-04-11.tanzverbot-karfreitag.md
- https://www.stuttgarter-zeitung.de/inhalt.ethikunterricht-an-schulen-nur-im-schneckentempo.f619c87f-8a16-46e5-a382-8ac15dcadef4.html (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.stuttgarter-zeitung.de/inhalt.streit-um-islamtheologie-islamunterricht-vor-dem-aus.3cdf5488-7db8-4b31-90da-8e3d41db1033.html (HTTP 404)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2025/pressemitteilung-2025-05-02.html (HTTP 404)  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- https://www.pdh.eu/lv/bw/ (HTTP 503)  ->  2024-03-15.der-preis-der-freiheit.md

### Kategorie 3: vermutliche Fehlalarme (403 Bot-Schutz / 000 tote Domain)

- https://bmjopen.bmj.com/content/4/11/e006316.full  ->  2026-01-12.wissenschaftler-rechtfertigen-weibliche-genitalverstuemmelung-eine-rezension.md
- https://jme.bmj.com/content/early/2025/12/14/jme-2025-110961  ->  2026-01-12.wissenschaftler-rechtfertigen-weibliche-genitalverstuemmelung-eine-rezension.md
- https://journals.sagepub.com/doi/10.1177/17456916241252085  ->  2024-11-05.wie-woke-sind-wir-erste-studien-veroeffentlicht.md
- https://journals.sagepub.com/doi/full/10.1177/00846724241235181  ->  2026-10-02.religion-und-lgbtq-was-entscheidet-ob-glaube-schuetzt-oder-schadet.md
- https://onlinelibrary.wiley.com/doi/full/10.1111/sjop.13018  ->  2024-11-05.wie-woke-sind-wir-erste-studien-veroeffentlicht.md
- https://pixabay.com/de/service/terms/?fbclid=IwAR1qY94mOah3sHONFtSnJd6e2Yf4i1YqF7C31RJr7IRIFQY8SHXG0u9A6L8#license  ->  2026-07-23.die-evolutionspaedagogik-eine-pseudowissenschaft.md
- https://www.consilium.europa.eu/de/infographics/terrorism-eu-facts-figures/  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.die-bibel.de/ressourcen/wirelex/10-lernorte-und-institutionen-religioeser-bildung/raeume-der-stille  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.gew-bw.de/index.php?eID=dumpFile&amp;t=f&amp;f=129215&amp;token=b4bd139903b01b8545048c05ea1c8d79af95b336&amp;sdownload=&amp;n=bundw-11-22-WEB.pdf  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.kas.de/de/einzeltitel/-/content/die-entwicklung-nihilistischer-gewalt  ->  2026-03-17.der-joker-ist-kein-satanist.md
- https://www.mdpi.com/2077-1444/9/2/37#B27-religions-09-00037  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.osiander.de/veranstaltungen/konstanz.cfm?evt_id=3055  ->  2018-11-18.konstanzer-forscherpaar-aleida-und-jan-assmann-veranstaltung-im-konzil.md
- https://www.sueddeutsche.de/wirtschaft/esoterik-wer-am-geschaeft-mit-dem-seelenheil-verdient-1.3596195  ->  2025-06-18.warum-schwurbler-schwurbeln-die-rolle-der-core-knowledge.md
- https://www.zeit.de/2020/53/religionsunterricht-kirchen-christentum-glauben-saekularisierung/komplettansicht  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.zeit.de/digital/2026-01/kuenstliche-intelligenz-suizid-character-ai-google-vergleich-gxe  ->  2026-10-12.der-ki-therapeut.md
- https://www.zeit.de/gesellschaft/schule/2023-03/religionsunterricht-abschaffung-schule-religionskunde  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://x.com/Alice%5C_Weidel/status/1918254947201638587  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md

Redirects (200 nach Redirect, technisch OK): 0 – siehe Rohdaten oben.


## Ergänzung Befund 5F: Fundstellen und Kategorien

Jeder Fund mit Entry-Datei. Kategorien: (2) Konvertierungsartefakte in URLs = Migrationsfehler,
gegen das Original zu reparieren; (1) echte tote Links (im Original bereits kaputt) = Entscheidung Andreas;
(3) Fehlalarme (403 Bot-Schutz, 000 tote Domain, Redirects technisch OK).

### Kategorie 2: Konvertierungsartefakte in URLs

- http://Muslimische Studierenden Union  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.stuttgarter-zeitung.de/inhalt.kontroverse-ueber-islamischen-religionsunterricht-stuttgarter-schulleiter-verteidigen-islamunterricht.add1d828-4299-4ad7-b94f-9fe2152acfb2.htmleidigen%20Islamunterricht  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://x.com/Alice%5C_Weidel/status/1918254947201638587  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md

### Kategorie 1: echte tote Links (404 / nicht erreichbar) – redaktionelle Entscheidung Andreas

- https://de.wikipedia.org/wiki/Axel_Meyer_(Biologe  ->  2018-12-18.interview-mit-prof-axel-meyer-uni-konstanz.md
- https://gbs-stuttgart.de/content/ethikunterricht-grundschulen-baden-wuerttemberg  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_8_Chr_Gemeinschaftsschule.pdf  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://gbs-stuttgart.de/sites/gbs-stuttgart/files/download/Kompaktinfo/Info_9_Bekenntnisschule_BW.pdf  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://hpd.de/artikel/auch-imame-sollten-nicht-kosten-allgemeinheit-ausgebildet-werden-21823%20  ->  2024-10-01.die-maske-faellt.md
- https://hpd.de/artikel/politischer-islam-durch-hintertuer-erste-absolventen-des-islamkollegs-deutschland-zertifiziert-21763%20  ->  2024-10-01.die-maske-faellt.md
- https://hpd.de/artikel/stille-krise-erzieher-qualitaet-23190  ->  2025-08-01.kinderbetreuung-mangelnde-selbstreflektion-und-pseudowissen.md
- https://hpd.de/artikel/warum-schwurbler-schwurbeln-rolle-core-knowledge-23233  ->  2025-10-07.die-homologie-von-stoerung-und-verschwoerung.md
- https://offenegesellschaft.org/tdog/  ->  2024-05-24.tag-der-offenen-gesellschaft-im-cafe-mondial-konstanz.md
- https://www.baden-wuerttemberg.de/de/service/presse/pressemitteilung/pid/ethikunterricht-kuenftig-ab-klasse-5  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.bka.de/SharedDocs/Kurzmeldungen/DE/Kurzmeldungen/241210_Gewalt-Chat-Gruppen.html  ->  2026-03-17.der-joker-ist-kein-satanist.md
- https://www.georg-elser-gedenkstaette.de/veranstaltungen-1/au%C3%9Ferhalb/konstanz-08-11-19/  ->  2019-11-03.georg-elser-allein-gegen-hitler.md
- https://www.humanism.scot/what-we-do/policy-campaigns/end-blasphemy-petition/  ->  2020-04-28.schottland-schafft-blasphemie-verbote-ab.md
- https://www.stuttgarter-nachrichten.de/inhalt.lka-longhorn-in-stuttgart-hier-wurde-am-karfreitag-trotzdem-getanzt-mit-ansage.8c1c5950-f1e5-4079-b117-0f5515a3200c.html  ->  2023-04-11.tanzverbot-karfreitag.md
- https://www.stuttgarter-zeitung.de/inhalt.ethikunterricht-an-schulen-nur-im-schneckentempo.f619c87f-8a16-46e5-a382-8ac15dcadef4.html  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.stuttgarter-zeitung.de/inhalt.streit-um-islamtheologie-islamunterricht-vor-dem-aus.3cdf5488-7db8-4b31-90da-8e3d41db1033.html  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2025/pressemitteilung-2025-05-02.html  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- http://bildungsbude.org/events/georg-elser-der-hitler-attentaeter/ (HTTP 000)  ->  2021-09-25.georg-elser-der-hitler-attentaeter.md
- http://m.suedkurier.de/region/kreis-konstanz/konstanz/Neue-humanistische-Gruppe-in-Konstanz;art372448,9372627 (HTTP 000)  ->  2017-08-16.neue-humanistische-gruppe-konstanz.md
- https://ak-schulfach-ethik.de (HTTP 000)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://clergyproject.de/ (HTTP 000)  ->  2018-06-30.clergyproject-de-released.md
- https://elinor.network/gastfreundschaft-ukraine/ (HTTP 000)  ->  2022-02-28.ukraine-fluechtlinge.md
- https://giordano-bruno-stiftung.de/meldung/deutschlandweite-strafanzeigen (HTTP 000)  ->  2018-10-29.ermutigung-zur-strafanzeige.md
- http://campuls.online/hochschulleben/muslimisches-leben-in-konstanz-2-im-interview-mit-dem-vorstand-der-muslimischen-hochschulgruppe/ (HTTP 301)  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.kantine-kn.de/kontakt/ (HTTP 301)  ->  2026-03-13.forbidden-moves-tanzen-statt-tanzverbot.md
- https://km-bw.de/site/pbs-bw-km-root/get/documents_E-954467378/KULTUS.Dachmandant/KULTUS/KM-Homepage/Pressemitteilungen/Pressemitteilungen%202015/2015%2010%2012%20Liste%20Standorte%20Islamischer%20Religionsunterrichte.pdf (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://schlussmachen.jetzt/ (HTTP 301)  ->  2019-04-07.saekulare-buskampagne-2-0-kommt-auch-nach-konstanz.md
- https://www.saekulare-migrantinnen.com/unser-team (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://www.charta-der-vielfalt.de/ (HTTP 301)  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.deutschlandfunk.de/gewaltbereitschaft-durch-religion-wenn-koran-und-bibel.886.de.html?dram:article_id=497370 (HTTP 301)  ->  2021-06-26.onlinevortrag-prof-ruud-koopmans-soziologe-humboldt-uni-berlin.md
- https://www.katholisch.de/aktuelles/aktuelle-artikel/missbrauch-das-sind-die-zahlen-aus-den-bistumern (HTTP 301)  ->  2018-10-29.ermutigung-zur-strafanzeige.md
- https://www.mdr.de/nachrichten/thueringen/verfassungsschutz-afd-beobachtung-100.html (HTTP 301)  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- https://www.tagesschau.de/inland/regional/hamburg/islamisches-zentrum-hamburg-102.html (HTTP 301)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.seemoz.de/ich-lese-seemoz/testimonials/in-eigener-sache-seemoz-e-v-legt-los-2/ (HTTP 301)  ->  2018-04-15.corinna-gekeler-konstanz.md
- https://www.stuttgarter-zeitung.de/inhalt.lessing-schulen-in-stuttgart-wie-im-hallschlag-um-schueler-geworben-wird.1aeb37fd-51fb-40d6-a0ab-d332810f2b16.html (HTTP 301)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- http://www.suedkurier.de/region/kreis-konstanz/konstanz/Islamkritiker-Abdel-Samad-kommt-doch;art372448,9244386 (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- http://www.theaterkonstanz.de/tkn/service/04368/index.html (HTTP 301)  ->  2019-05-10.kirche-macht-geld-welche-rolle-spielt-die-religion-im-saekularen-staat.md
- http://www.vhs-konstanz-singen.de/index.php?id=54&kathaupt=11&knr=171-10471&katid= (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- http://www.vhs-konstanz-singen.de/index.php?id=54&kathaupt=11&knr=171-10471&katid (HTTP 301)  ->  2017-04-09.hamed-abdel-samad-konstanz.md
- https://www.welt.de/politik/deutschland/article154689954/So-naehren-Erdogans-Prediger-Islamismus-in-Deutschland.html (HTTP 301)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- http://zebra-kino.de/ (HTTP 301)  ->  2024-03-15.der-preis-der-freiheit.md
- https://www.bundesgesundheitsministerium.de/presse/pressemitteilungen/kommissionsbericht-reproduktive-selbstbestimmung-pm-15-04-24.html (HTTP 301)  ->  2025-04-01.neue-hoffnung-fuer-die-entkriminalisierung-von-schwangerschaftsabbruechen.md
- https://barnsteiner-film.de/ (HTTP 302)  ->  2025-11-06.wer-ist-hier-blind.md
- https://www.google.com/maps/place/Katzgasse+7,+78462+Konstanz,+Deutschland/@47.663483,9.174543,14z/data=!4m5!3m4!1s0x479af71d540a1819:0x47c691670653b416!8m2!3d47.6634833!4d9.1745432?hl=de (HTTP 302)  ->  2018-02-28.dr-natalie-grams-homoeopathie-neu-gedacht-was-patienten-wirklich-hilft.md
- https://www.google.de/maps/place/B%C3%BCrgersaal+Konstanz/@47.6610429,9.1719947,16z/data=!4m5!3m4!1s0x479af6e284ff92ff:0x50dfa013d4d0c880!8m2!3d47.6618397!4d9.173052 (HTTP 302)  ->  2018-04-15.corinna-gekeler-konstanz.md
- https://www.fdp-waldbroel.de/fdp-kritisiert-verlaengerung-des-islamischen-religionsunterrichts (HTTP 302)  ->  2024-10-01.die-maske-faellt.md
- https://m.youtube.com/watch?v=F8ETNGn0tcA (HTTP 302)  ->  2023-10-23.armut-gefangenschaft-tod.md
- https://youtu.be/UHEUNXv8M7U (HTTP 303)  ->  2021-04-26.das-lesen-eines-buchs-ist-durch-nichts-zu-ersetzen-ausser-durch-das-lesen-eines-buchs.md
- https://unsplash.com/license (HTTP 307)  ->  2026-10-02.religion-und-lgbtq-was-entscheidet-ob-glaube-schuetzt-oder-schadet.md
- https://www.bmi.bund.de/DE/themen/verfassung/parteienrecht/parteiverbot/parteiverbot-node.html#::text=In%20der%20Geschichte%20der%20Bundesrepublik%20Deutschland%20hat,Deutschlands%20(%20KPD%20 (HTTP 307)  ->  2025-05-05.die-alternative-fuer-deutschland-ist-gesichert-rechtsextremistisch.md
- https://www.elk-wue.de/leben/bildung-und-kultur/religionsunterricht (HTTP 307)  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.zdf.de/nachrichten/politik/ausland/us-feministin-judith-butler-terror-hamas-israel-100.html (HTTP 308)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.zdf.de/nachrichten/politik/chronologie-anschlaege-islamismus-deutschland-100.html (HTTP 308)  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.pdh.eu/lv/bw/ (HTTP 503)  ->  2024-03-15.der-preis-der-freiheit.md

### Kategorie 3: vermutliche Fehlalarme

403 (Bot-Schutz, Seite existiert vermutlich):
- https://bmjopen.bmj.com/content/4/11/e006316.full  ->  2026-01-12.wissenschaftler-rechtfertigen-weibliche-genitalverstuemmelung-eine-rezension.md
- https://jme.bmj.com/content/early/2025/12/14/jme-2025-110961  ->  2026-01-12.wissenschaftler-rechtfertigen-weibliche-genitalverstuemmelung-eine-rezension.md
- https://journals.sagepub.com/doi/10.1177/17456916241252085  ->  2024-11-05.wie-woke-sind-wir-erste-studien-veroeffentlicht.md
- https://journals.sagepub.com/doi/full/10.1177/00846724241235181  ->  2026-10-02.religion-und-lgbtq-was-entscheidet-ob-glaube-schuetzt-oder-schadet.md
- https://onlinelibrary.wiley.com/doi/full/10.1111/sjop.13018  ->  2024-11-05.wie-woke-sind-wir-erste-studien-veroeffentlicht.md
- https://pixabay.com/de/service/terms/?fbclid=IwAR1qY94mOah3sHONFtSnJd6e2Yf4i1YqF7C31RJr7IRIFQY8SHXG0u9A6L8#license  ->  2026-07-23.die-evolutionspaedagogik-eine-pseudowissenschaft.md
- https://www.consilium.europa.eu/de/infographics/terrorism-eu-facts-figures/  ->  2024-09-13.islamismus-eine-ernuechternde-bilanz.md
- https://www.die-bibel.de/ressourcen/wirelex/10-lernorte-und-institutionen-religioeser-bildung/raeume-der-stille  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.gew-bw.de/index.php?eID=dumpFile&amp;t=f&amp;f=129215&amp;token=b4bd139903b01b8545048c05ea1c8d79af95b336&amp;sdownload=&amp;n=bundw-11-22-WEB.pdf  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.kas.de/de/einzeltitel/-/content/die-entwicklung-nihilistischer-gewalt  ->  2026-03-17.der-joker-ist-kein-satanist.md
- https://www.mdpi.com/2077-1444/9/2/37#B27-religions-09-00037  ->  2024-09-05.die-nicht-ganz-so-stillen-raeume.md
- https://www.osiander.de/veranstaltungen/konstanz.cfm?evt_id=3055  ->  2018-11-18.konstanzer-forscherpaar-aleida-und-jan-assmann-veranstaltung-im-konzil.md
- https://www.sueddeutsche.de/wirtschaft/esoterik-wer-am-geschaeft-mit-dem-seelenheil-verdient-1.3596195  ->  2025-06-18.warum-schwurbler-schwurbeln-die-rolle-der-core-knowledge.md
- https://www.zeit.de/2020/53/religionsunterricht-kirchen-christentum-glauben-saekularisierung/komplettansicht  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md
- https://www.zeit.de/digital/2026-01/kuenstliche-intelligenz-suizid-character-ai-google-vergleich-gxe  ->  2026-10-12.der-ki-therapeut.md
- https://www.zeit.de/gesellschaft/schule/2023-03/religionsunterricht-abschaffung-schule-religionskunde  ->  2023-07-10.ethikunterricht-grundschulen-baden-wuerttemberg.md

Redirects (301/302/307/308 bzw. 200 nach Redirect, technisch OK): 0

