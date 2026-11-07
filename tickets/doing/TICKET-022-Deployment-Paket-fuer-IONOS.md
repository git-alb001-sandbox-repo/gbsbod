# TICKET-022: Deployment-Paket für IONOS schnüren (nur Vorbereitung)

Andreas deploys selbst auf IONOS Webhosting (SSH, Domain im
selben Vertrag). Die CLI bekommt KEINEN IONOS-Zugriff –
Deliverable ist ein 1:1 hochladbares Release-Archiv.

1. RELEASE-PAKET BAUEN:
   - Caches leeren (php please cache:clear, config:clear)
   - npm run build (Vite-Output public/build frisch)
   - composer install --no-dev --optimize-autoloader
   - .env PRODUKTIONS-Vorlage: APP_ENV=production,
     APP_DEBUG=false, APP_URL=https://neu.gbs-bodensee.de
     (Labor-URL, Platzhalter für den späteren Switch),
     APP_KEY aus der VM-.env übernehmen
   - NICHT ins Paket: node_modules, .git, VM-Restdateien,
     dev-.env
   - Archiv: statamic-site-release-<Datum>.tar.gz (komplettes
     statamic-site-Verzeichnis im Release-Zustand) + SHA256-
     Checksumme

2. DEPLOY-CHECKLISTE.md (docs/): Schritt-für-Schritt für
   Andreas: IONOS-PHP-VERSION AUF VM-VERSION SETZEN (K.O.-
   Kriterium!), Zielverzeichnis, Subdomain neu.gbs-bodensee.de
   + Let's-Encrypt-HTTPS, DocRoot auf …/public, BasicAuth
   (.htaccess/.htpasswd), Upload + Entpacken, .env final,
   Schreibrechte storage/, Smoke-Checks. Test-Kapitel: alle
   Seitentypen, Suche, Karussell, News-Detail, Mobile – und
   SPEZIELL: Kalender-Feed VOM IONOS-SERVER abrufbar?
   (gbs-termine.de blockt teils externe Zugriffe; Fallback-
   Anzeige = Befund melden, NICHT überspielen)

3. VERIFIKATION: Archiv in der VM in ein FRISCHES Verzeichnis
   entpacken, artisan serve darauf, Smoke-Test – das Paket
   muss ohne Entwicklungsreste komplett laufen. Größe +
   Checksumme dokumentieren; Commit + push (nur Checkliste/
   Skripte, NICHT das Archiv ins Repo).

AKZEPTANZ: Archiv vorhanden, entpackt als lauffähig veri-
fiziert, Checksumme dokumentiert, Checkliste komplett, nichts
Dev-spezifisches im Paket.

Ergänzung TICKET-022 (Andreas 06.11.): In der DEPLOY-CHECK-
LISTE.md einen Abschnitt „NACH PRODUKTIVSCHALTUNG" anlegen:

A) CODE-ONLY-DEPLOYMENTS – rsync-Ausschlussliste:
   Hochladen NUR: app/, resources/, routes/, config/,
   public/build/, ggf. vendor/ + composer.json/lock +
   package.json + vite.config.js
   NIE hochladen: content/, users/, storage/,
   public/assets/ (Live-Inhalte!)
   Als fertige rsync-Befehle mit je einer --exclude-Zeile in
   die Checkliste schreiben; alternativ die Code-only-Archiv-
   Variante dokumentieren.

B) INHALTS-RÜCKHOL-RUNDE (vor jedem Code-Deploy, sonst
   regelmäßig – z. B. monatlich):
   - Andreas lädt per SFTP vom Live-System herunter:
     content/ + public/assets/ (fertiger SFTP-Befehl in
     Checkliste)
   - Übergabe an CLI → Übernahme ins Repo, Commit + push
     (Repo bleibt dadurch vollständiges Inhalts-Backup)
   - Merksatz prominent: „Erst Inhalte von live ins Repo,
     dann Code von Repo auf live."

C) WORKFLOW-REGEL als erster Abschnitt der Checkliste:
   CP = Inhalte (Andreas, direkt live). Code = CLI (VM →
   Repo → selektiver Upload). Niemals Code live editieren –
   CSS braucht den Vite-Build, und Live-Änderungen ohne
   Repo-Eintrag würde das nächste Deployment überschreiben.
