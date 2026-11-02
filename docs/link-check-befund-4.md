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
