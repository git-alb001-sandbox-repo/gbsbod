# Inhalts-Inventur der bestehenden Website gbs-bodensee.de

Ticket: TICKET-003 · Stand: 2026-10-27
Methode: Alle Angaben durch Auslesen der Live-Seiten per `curl` (Startseite,
alle verlinkten Unterseiten, News-Archiv inkl. aller 20 Paginierungsseiten,
Termine-Seite inkl. Detailansicht, englische Version, robots.txt, RSS-Feeds).
Fußzeile der Website: „Stand 10/2026".

## 1. Systemübersicht

- **CMS:** Drupal 7 (Meta `Generator: Drupal 7`, `x-generator`-Header bestätigt)
- **Theme:** `sfbasic` mit Subtheme `gbs` (`sites/all/themes/subthemes/gbs/`)
- **Eigene Module:** `sfmod` (`sites/all/modules/custom/sfmod/`) – u. a. für die
  Kalender-Einbindung; Inhaltstypen `page`, `news`, `ecal-events`, `sidebar`
- **Sprachen:** Deutsch (Standard) und Englisch (`/en`, i18n/Entity-Translation)
- **Sonstige Technik:** jQuery 1.12, Shariff-Share-Buttons (facebook, twitter,
  googleplus; Backend `/sites/all/libraries/shariff-backend`), Cookieconsent,
  Print-Modul (`/print/<nid>`, `/printmail/<nid>`), Drupal-Suchmodul,
  Magnific Popup (Bildergalerien), Navobile (Mobile-Menü)
- **Google Analytics:** in der Datenschutzerklärung erwähnt, aber **nicht**
  tatsächlich eingebunden (kein Tracking-Script gefunden)

## 2. Kalender-Einbindung (Humanistischer Veranstaltungskalender)

Pflicht-Feature der neuen Website – daher hier im Detail:

### Technik: serverseitiges Rendering durch eigenes Drupal-Modul `sfmod`

Es handelt sich um **kein iFrame, kein JavaScript-Widget und keinen im
Browser geladenen RSS-Feed**. Der Kalender wird serverseitig von Drupal
gerendert; zwei Bausteine:

1. **Sidebar-Block „Aktuelle Termine"** (auf jeder Seite sichtbar)
   - Block-ID: `block-sfmod-ecal-short-teaser`, View: `ecal_short_teaser`
   - Template: `cal_teaser_short`; zeigt 10 kommende Termine
     (Datum, Titel, Untertitel, „(weiter...)"-Link)
   - HTML-Kommentar `<!-- 2026-10-27 -->` direkt vor dem Block –
     vermutlich das Abruf-/Cache-Datum der Kalenderdaten
2. **Termine-Seite `/termine`**
   - Drupal-Node **nid 2893**, Inhaltstyp **`ecal-events`**, Titel „Termine"
   - Ansichten werden über Query-Parameter gesteuert:
     - `?action=cal&tab=cal_teaser_long` – Liste „Alle Termine" (Standard)
     - `?action=cal&tab=cal_display_month` – Monatsansicht
     - `?action=cal&tab=cal_search` – Terminsuche (POST-Feld `search_text`)
     - `?action=cal&id=<ID>&tab=cal_single` – Detailansicht eines Termins
       (Beispiel: `/termine?action=cal&id=3883&tab=cal_single`)

### Beteiligte URLs

| URL | Rolle |
|-----|-------|
| `https://gbs-bodensee.de/termine` | Termine-Seite (Drupal-Node 2893, Typ `ecal-events`) |
| `/termine?action=cal&tab=…&id=…` | Ansichts-/Detail-URLs (s. o.) |
| `//hpd-termine.de/css/hv-cal.css` | Kalender-Stylesheet, protocol-relative eingebunden (nur per HTTP abrufbar, s. u.) |
| `https://gbs-termine.de/files/tmp/preset-teaser_<hash>.jpg/png` | Termin-Vorschaubilder (Bilder liegen zentral beim Kalenderdienst, nicht auf gbs-bodensee.de) |
| `http://hpd-termine.de/` → `/login.php` | Zentraler Kalender-Backend (Zugriff nur nach Login, 403 anonym) |
| `http://gbs-termine.de/` → `/home.php` → `/login.php` | Zweite Backend-Domain des Kalenderdiensts (ebenfalls login-geschützt, 403 anonym) |

### Detailansicht eines Termins (z. B. id=3883)

Enthält: Titel, Untertitel, Teaser, Langbeschreibung, Datum, Ort (Stadt +
Veranstaltungsort), Veranstalter (mit Mailto-, Kontaktformular- und
Website-Links), Eintritt, **Google-Maps-iFrame** (Kartenansicht der Adresse)
sowie einen per JavaScript erzeugten **Google-Calendar-Link** („In den
Kalender", `gc_link`).

### Wichtige Befunde für den Statamic-Neubau

- **Datenquelle nicht öffentlich:** Die Termin-Daten werden serverseitig im
  Modul `sfmod` bezogen. Die Backend-Server `hpd-termine.de` /
  `gbs-termine.de` sind von außen ausschließlich login-geschützt erreichbar
  (`/login.php`, 403 anonym; per HTTP). Die konkrete Schnittstelle
  (API, Feed, Datenbank-Replikation o. ä.) ist von außen **nicht
  einsehbar**.
- **HTTPS-Bug:** `hpd-termine.de` ist per HTTPS nicht nutzbar
  (selbstsigniertes Zertifikat `CN=nirvana, O=gbs`, 403). Da das
  Stylesheet protocol-relative als `//hpd-termine.de/css/hv-cal.css`
  eingebunden ist, lädt es auf der HTTPS-Site im Browser effektiv **nicht**.
- **Konsequenz:** Für die Statamic-Site muss bei der GBS-Stiftung ein
  dokumentierter Zugang angefragt werden (API-Endpoint, Feed-URL oder
  Berechtigungen für hpd-termine.de/gbs-termine.de). Diese Inventur nennt
  dafür alle bekannten URLs und Parameter.

## 3. Vollständige Seitenliste

| URL | Titel | Inhaltstyp | Zweck / Umfang |
|-----|-------|------------|----------------|
| `/` (kanonisch `/inhalt/intro`, node 2904) | Startseite Intro | page (statisch) + eingebettete News-View | Vereinsvorstellung, Termine-Hinweise, News-Teaser (12/Seite, Pager bis Seite 9); Details s. Abschnitt 4 |
| `/termine` (node 2893) | Termine | ecal-events | Humanistischer Veranstaltungskalender (s. Abschnitt 2) |
| `/inhalt/radio-und-mehr` | Netzwerk (Menütitel) / „GBS Bodensee in den sozialen Netzen" | page (statisch) | Social-Media-Kanäle (YouTube, Facebook-Gruppe, Instagram, X), YouTube-Kanal GBS Stuttgart, Podcast „Kritisches Denken"; ~1 Seite, Stand 09/2017 |
| `/inhalt/kontakt` | Kontakt | page (statisch) | Ansprechpartner als Mailto-Links (Vorstand, Hochschulgruppe, hbbk); Stand 07/2017 |
| `/inhalt/aufklaerer-werden` | Aufklärer werden | page (statisch) | Mitmach-Seite: Treffen, Mailverteiler, Vereinsmitgliedschaft (2 PDFs: Aufnahmeantrag, SEPA-Formular); Stand 08/2017 |
| `/inhalt/hochschulgruppe-der-uni-konstanz-gegruendet` | Hochschulgruppe an der Uni Konstanz gegründet | page (statisch) | Kurzbeitrag zur Gründung der Hochschulgruppe (07/2017), Kontakt HSG |
| `/datenschutz` | Datenschutzerklärung | page (statisch) | DSGVO-Text, Google-Analytics- (veraltet) und Facebook-Passagen; Stand 2011/2018 |
| `/impressum` | Impressum | page (statisch) | Verein, Vorstand, Vereinsregister, Bankverbindung, Haftung/Distanzierung |
| `/404` (node 2872) | „Leider ist da nichts..." | page (statisch) | Eigene 404-Fehlerseite |
| `/meldung/<slug>` | je Beitrag | news | **108 News-Beiträge**, älteste Node-Daten 2011, redaktionell laufend aktualisiert (zuletzt 12.10.2026); Titel, Subheadline, Datum, Bild, Fließtext, Shariff-Buttons |
| `/taxonomy/term/all` | – | Drupal-View | News-Archiv, 12 Teaser/Seite, 20 Seiten (Pager 0–19), „mehr"-Link von der Startseite |
| `/taxonomy/term/all?page=N` | – | View-Paginierung | Archiv-Seiten |
| `/en` | Startseite Intro (engl.) | page (übersetzt) | Englische Version der Startseite |
| `/en/imprint` | Imprint | page (übersetzt) | Einzige weitere englische Seite; Rest der Website nicht übersetzt |
| `/node/<nid>` | – | Drupal-Shortlinks | Kanonische Node-URLs (z. B. `/node/2904`) |
| `/print/<nid>`, `/printmail/<nid>` | – | Print-Modul | Druck-/Mail-Ansichten je Node |
| `/rss.xml` | gbs Bodensee – RSS 2.0 | Feed | Frontpage-Feed (RSS 2.0, ~12,5 KB) |
| `/taxonomy/term/all/all/feed` | – | Feed | News-Feed (RSS) |
| `/search` (POST) | Suche | Drupal-Suchmodul | Website-Suche (Block in der Sidebar) |
| `/kontakt` | – | – | **Toter Link** (404); veraltete Verlinkung existiert vereinzelt, Menü zeigt korrekt auf `/inhalt/kontakt` |

Hauptnavigation (Menü): Home · Die GBS (→ giordano-bruno-stiftung.de) ·
Verbindungen (→ giordano-bruno-stiftung.de/verbindungen) · Hochschulgruppe
(intern) · Netzwerk (intern) · Kontakt (intern). Service-Navigation:
Datenschutz · Impressum. Footer: Social-Links der GBS-Stiftung, Datenschutz,
Impressum, Sprachumschalter DE/EN, „Stand 10/2026".

`robots.txt`: `Disallow: /` mit Ausnahmen `Allow: /index.php`,
`Allow: /meldung/`, `Allow: /termine` – nur Meldungen und Termine sind
für Suchmaschinen freigegeben. **Kein sitemap.xml** vorhanden (404).

## 4. Startseite im Detail (Sektionen)

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | Header | Slogan „Aufklärung im 21. Jahrhundert", Logo-Bild, Hauptnavigation, Service-Navigation (Datenschutz, Impressum) |
| 2 | Banner-Zeile | 2 klickbare Banner: „Aufklärer werden" (→ `/inhalt/aufklaerer-werden`, Bild `gbs_webbanner_aufklaerer.jpg`) und hbbk-Logo (→ `hbbk-bodensee.org`, SVG) |
| 3 | Aktivitäten-Hinweis | Meiste Aktivitäten im hbbk; Link zum Mitgliedsformular des hbbk (extern) |
| 4 | Social-Media-Zeile | „Folgen Sie uns auf Social Media!": YouTube, Facebook, Instagram, X (je Icon-Bild + externer Link) |
| 5 | Vereinsvorstellung | gbs-Bodensee als eine von über 50 Regionalgruppen; 3 Kernziele (naturalistische Weltanschauung, säkularer Humanismus als Leitkultur, Gegengewicht zu Religion/Esoterik) |
| 6 | Offener Kreis / Stammtisch | „Offener Kreis, jeder kann mitmachen"; Stammtisch 3. Dienstag/Monat 19–22 Uhr; Quartalstreff im hbbk (Jan/Apr/Jul/Okt statt Stammtisch) |
| 7 | hbbk-Hinweis | hbbk beherbergt die Vereinsräume, Öffnungszeiten beachten |
| 8 | YouTube-Kanal | Einführungsvideo des Vorstands Alexander Wolber, Verweis auf Netzwerk-Seite |
| 9 | Newsletter | Mailto-Link an `info@gbs-bodensee.de` mit vorbefülltem Betreff/Text (kein Formular!) |
| 10 | Nächstes Treffen | Manuell gepflegter Hinweis („Dienstag, 17. November, 19 Uhr, Restaurant Sedir") – **statischer Text, kein Kalender-Bezug** |
| 11 | Kampagnen-Banner | Bild „Absolute Mehrheiten für säkulare Politik – Zentralrat" (full-width) |
| 12 | „Aktuelle Meldungen" | Eingebettete View: 12 News-Teaser (Bild, Titel, Subheadline, Datum, Teasertext, „Weiterlesen"), Pager 9 Seiten, „mehr"-Link zum Archiv |
| 13 | Sidebar (auf allen Seiten) | Suchformular; YouTube-Stiftungsvideo (iframe `youtube.com/embed/C0On8bNBRMg`); Evokids-Banner (→ evokids.de); Spendenaufruf mit PayPal-Button (`paypal.com/donate/?hosted_button_id=3PVYRE2YCXN8N`); **Block „Aktuelle Termine"** (Kalender-Teaser, s. Abschnitt 2) |
| 14 | Footer | Shariff-Share-Buttons; GBS-Stiftung auf Facebook/Twitter; Datenschutz; Impressum; DE/EN-Umschalter; „Stand 10/2026" |

## 5. Formulare

Die Website hat **kein einziges echtes Web-Formular** (kein Kontakt-,
Newsletter- oder sonstiges Eingabeformular). Stattdessen:

| Funktion | Umsetzung |
|----------|-----------|
| Kontakt | Mailto-Links auf `/inhalt/kontakt`: `juergen.roeder@`, `andreas.leber@`, `alexander.buhl@`, `scarlet.beierer@`, `alexander.wolber@gbs-bodensee.de` (Vorstand, Hochschulgruppe, hbbk) |
| Newsletter | Mailto-Link an `info@gbs-bodensee.de` mit vorbefülltem Betreff „Ich möchte den Newsletter der GBS Bodensee erhalten" und Textvorlage „Bitte nehmen Sie mich in Ihren Newsletter-Versand auf. Meine Mailadresse: XXXXXXXXXXX" |
| Website-Suche | Drupal-Suchblock (POST, `form_id=search_block_form`) → Drupal-Suche |
| Terminsuche | Form-POST an `/termine?action=cal&tab=cal_search`, Feld `search_text` (Kalender-Backend) |
| Mitgliedschaft | 2 PDF-Downloads (Aufnahmeantrag, SEPA-Lastschriftmandat) auf `/inhalt/aufklaerer-werden`; Einsendung per Post oder eingescannt per Mail; Mitgliedsformular des hbbk (extern) |
| Spenden | Externer PayPal-Spendenlink (Buttons `hosted_button_id=3PVYRE2YCXN8N`) in der Sidebar |
| Kommentarfunktion | Nicht vorhanden |

## 6. Medien-Inventar

### Logos / Branding
- `sites/default/files/gbs-bodensee-logo-small_8.png` – Header-Logo (alle Seiten)
- `sites/default/files/favicon.ico` – Favicon
- `sites/default/files/default_images/gbs_webbanner_aufklaerer.jpg` – Banner „Aufklärer werden"
- `sites/default/files/default_images/hbbk_Logo_Positiv_WEB.svg` – hbbk-Logo (Startseite)
- `sites/default/files/absolute_mehrheiten_fuer_saekulare_politik_-_zentralrat.png` – Kampagnen-Banner Startseite

### Social-Media-Icons (Startseite)
- `yt_icon_red_digital.png`, `facebook_logo_primary.png`, `instagram_glyph_gradient.png`, `x-logo-black.png`

### Sidebar-Grafiken
- `misc/Spendenbutton.png` – PayPal-Spendenbutton
- `sites/default/files/evokids_banner_0.png` – Evokids-Werbebanner

### Seiten-Grafiken
- `/inhalt/radio-und-mehr`: `kritisches-denken-logo700px.jpg`, `large_gbs_stuttgart_youtube-kanal.png`, `objects/videos.png`
- `/inhalt/aufklaerer-werden`: `styles/default/public/objects/leuchtturm_aufklaerung.jpg` (Bildstil-Variante von `/files/leuchtturm_aufklaerung-jpg`)

### News-Teaser-Bilder (Startseite/Archiv; vollständige Liste nur per Crawlen aller 108 Meldungen ermittelbar)
`therapeut-im-gesprach-mit-klient-in-ruhigem-buro-1140300-1280x720.jpg`,
`sarah_pohl_foto.jpg`, `ilia-bronskiy-zmt0mqn5ybm-unsplash.jpg`, `kinder_0.jpg`,
`gbs_bodensee_tag_der_offenen_gesellschaft.png`, `gespraech_psychologin.png`,
`suttner_stipendium_ausschreibung2023_bild1.png`, `ultrarechte_usa.png`,
`computer_internet_cyber_grooming.png`, `tanzen_statt_tanzverbot.png`,
`mss_0.png`, `fgm_symbolbild.png`

### PDF-Downloads
- `sites/default/files/download/aufnahmeantrag_gbs-bodensee_e.v._-_1.3.pdf`
- `sites/default/files/download/sepa-formular_gbs-bodensee_e._v.pdf`

### Externe Medien (nicht zu migrieren, nur einbinden)
- YouTube-Video `https://www.youtube.com/embed/C0On8bNBRMg` (Stiftungsvideo, Sidebar-iframe)
- Termin-Bilder des Kalenderdiensts: `https://gbs-termine.de/files/tmp/preset-teaser_*.jpg|png`
- Google-Maps-iFrames auf Termin-Detailseiten

## 7. Besonderheiten und Hinweise für den Content-Umzug

- **108 Meldungen** sind vollständig über das Archiv `/taxonomy/term/all`
  (Pages 0–19) inventarisierbar; Aliase folgen dem Muster `/meldung/<slug>`.
  RSS-Feeds: `/rss.xml` (Frontpage) und `/taxonomy/term/all/all/feed` (News).
- Die Startseiten-Punkte „Nächstes Treffen" und „Newsletter" sind manuell
  gepflegt bzw. Mailto-basiert – im Neubau durch Kalender- bzw.
  Newsletter-Funktionalität ersetzbar.
- `/kontakt` (ohne `/inhalt/`) ist ein toter Link; einige Seiten verweisen
  noch darauf (`/kontakt#impressum`).
- Englische Version ist ein Torso (nur Startseite + `/en/imprint`); vor einer
  Migration klären, ob EN erhalten bleibt.
- Shariff-Buttons (facebook, twitter, googleplus) sind technisch veraltet
  (googleplus existiert nicht mehr); Drucken/Senden-Links pro Node
  (Print-Modul).
- `robots.txt` sperrt die Website bis auf `/meldung/` und `/termine` für
  Suchmaschinen; im Neubau sollte eine echte Sitemap + liberale robots.txt
  ergänzt werden.
