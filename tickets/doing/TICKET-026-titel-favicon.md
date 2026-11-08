# TICKET-026: HTML-Titel im RG-Muster (GROSS) + Favicon nach Karlsruher Vorbild

Andreas-Auftrag (09.11.2026): Beide Punkte zusammen in DIESEM einen
Ticket. Vorlagen sind die Referenz-Sites der Schwester-Regionalgruppen.

## 1. HTML-TITEL (resources/views/layout.antlers.html)

Status quo (Titel-Zeile im <head>):

    <title>{{ (title ?? site:name)   sanitize }}</title>

Rendert nur den nackten Seitentitel ("Home", "Über uns") – ohne
Vereinsbezug in Browser-Tabs, Bookmarks und Suchergebnissen.

NEU (Muster der Referenz-Sites, Andreas-Entscheid für die GROSS
geschriebene Variante wie Stuttgart/Karlsruhe, gegen München):

    <title>{{ title | upper | sanitize }} - gbs Bodensee</title>

Referenz-gerendert:
- gbs-stuttgart.de  → "START - gbs Stuttgart"
- gbs-karlsruhe.de  → "START - gbs Karlsruhe"
- (gbs-muc.de zeigt "Start" – bewusst NICHT genommen)

"gbs Bodensee" bleibt gemischt (wie "gbs Stuttgart" bei den
Referenzen); GROSS gilt nur für den Seitentitel.

## 2. HOME-ENTRY UMBENENNEN: "Home" → "Start"

content/collections/pages/home.md: frontmatter title von 'Home' auf
'Start' ändern, damit die Startseite exakt wie die Referenzen
"START - gbs Bodensee" zeigt (statt "HOME - gbs Bodensee").
Vorher prüfen (grep), dass nichts anderes den Entry-Titel 'Home'
verwendet (Nav-Labels kommen aus dem Nav-Tree, nicht aus dem
Entry-Titel – nur sicherheitshalber gegenprüfen).

## 3. FAVICON (nach gbs-karlsruhe.de)

1. gbs-karlsruhe.de analysieren: welche Icon-Dateien referenziert
   der <head> (link rel="icon", apple-touch-icon, favicon.ico o.ä.)?
   Die referenzierten Dateien per curl laden und unverändert
   übernehmen.
2. Ablage im Repo unter public/ (Wurzel des DocRoot) – NICHT nach
   public/assets/ (steht auf der rsync-Exclude-Liste der Code-
   Deploys; das Favicon muss mit Code-Deploys mitgehen).
3. layout.antlers.html: die <link rel="icon" ...>-Zeilen passend
   zu den übernommenen Dateien ergänzen, analog Karlsruher
   Referenz.
4. Kontext: gemeinsames Icon der GBS-Regionalgruppen (gleiche
   Stiftung, gleiches Design-Template der Schwester-Regionalgruppe
   Karlsruhe) – Übernahme von Andreas (Vorsitzender GBS-Bodensee)
   beauftragt.

## 4. VERIFIKATION (gerendert, VM)

- <title> je Seitentyp: "START - gbs Bodensee" (Startseite),
  "ÜBER UNS - gbs Bodensee", "MELDUNGEN - gbs Bodensee",
  "KONTAKT - gbs Bodensee" usw.
- BEWUSSTE FOLGE, in der Abnahme prüfen: News-Detail-Titel
  werden ebenfalls GROSS ("MELDUNGSTITEL - GBS BODENSEE") –
  einheitliches Muster; falls Andreas das bei Meldungen nicht
  will, Rückmeldung im Abnahme-Rundgang (dann Sonderregel nur
  für News-Detail).
- Favicon im Browser-Tab sichtbar (VM); alle Icon-Dateien
  liefern 200.
- Screenshots in docs/ (Titel + Tab mit Favicon); keine
  sichtbaren Seitenteile verändert.

## 5. BUILD + PUSH

- Kein Vite-Build nötig (Antlers-Änderung + neue public-Dateien).
- Teilergebnisse sofort committen + pushen (Arbeitsregel).
