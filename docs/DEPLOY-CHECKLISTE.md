# DEPLOY-CHECKLISTE – gbs-bodensee.de (Statamic-Neubau) auf IONOS

Erstellt im Rahmen von TICKET-022. Andreas deployt selbst auf IONOS
Webhosting (SSH, Domain im selben Vertrag). Die CLI hat keinen
IONOS-Zugang – Deliverable ist das Release-Archiv + diese Checkliste.

## 0. WORKFLOW-REGEL (vor allem anderen lesen!)

- **CP = Inhalte.** Andreas pflegt Inhalte direkt live im Statamic-Control-Panel.
- **Code = CLI.** Code-Änderungen laufen über die VM → Repo → selektiver Upload.
- **Niemals Code live editieren!** CSS braucht den Vite-Build; eine
  Live-Änderung ohne Repo-Eintrag würde das nächste Deployment
  überschreiben.
- **Merksatz: Erst Inhalte von live ins Repo, dann Code von Repo auf live.**

## 1. Release-Paket (liegt lokal bei der CLI, NICHT im Repo)

- Datei: `releases/statamic-site-release-2026-11-07.tar.gz`
- Größe: **69 MB**
- SHA256: `db3ddb46f2779616efa9e0ef4f06228a807733e0baa7e01eaf7d9d8810cdbf57`
  (liegt auch als `statamic-site-release-2026-11-07.tar.gz.sha256` daneben)
- Inhalt: komplettes `statamic-site/` im Release-Zustand –
  `vendor/` (composer install --no-dev --optimize-autoloader),
  `public/build/` (frischer Vite-Build), `content/`, `users/`,
  `public/assets/`, produktive `.env`
  (APP_ENV=production, APP_DEBUG=false,
  APP_URL=https://neu.gbs-bodensee.de, APP_KEY aus der VM-.env übernommen)
- NICHT enthalten: `node_modules`, `.git`, dev-`.env`, `database.sqlite`,
  Logs, Tests, Storage-Caches
- Verifiziert (TICKET-022): Archiv in frischem Verzeichnis entpackt,
  `php artisan serve` darauf gestartet – alle Seitentypen liefern HTTP 200
  (Home inkl. Karussell, /aktuelles, /meldung/<slug>, /termine, /suche,
  /kontakt, /ueber-uns, /impressum, /datenschutz, News-Bilder, Vite-Assets).

## 2. IONOS-Grundkonfiguration (einmalig)

1. **PHP-Version auf VM-Version setzen – K.O.-Kriterium!**
   IONOS-Kundencenter → Hosting-Vertrag → PHP-Version auf **PHP 8.3**
   stellen (VM läuft PHP 8.3.6). Sonst weiße Seite/Fehler.
2. Subdomain **`neu.gbs-bodensee.de`** anlegen (Domain-Verwaltung im selben
   Vertrag). Zielverzeichnis notieren, z. B. `/www/neu-gbs-bodensee/`.
3. **Let's-Encrypt-SSL** für die Subdomain aktivieren (Domain-Verwaltung → SSL).
4. **DocRoot** der Subdomain auf **`…/public`** setzen (wichtig: das
   `public/` *innerhalb* des Pakets, nicht das Paketverzeichnis selbst!).
5. **BasicAuth** bis zum GoLive (Schutz vor öffentlich sichtbarem Labor-Stand):
   - Passwort-Datei erzeugen und hochladen (eine Ebene über dem DocRoot):
     ```
     htpasswd -c .htpasswd andreas        # lokal erzeugen
     sftp <user>@<ssh-host>               # dann .htpasswd nach /www/neu-gbs-bodensee/ laden
     ```
   - `public/.htaccess` ergänzen (absoluten Pfad per `pwd` auf dem Server ermitteln):
     ```apache
     AuthType Basic
     AuthName "GBS Bodensee – neuer Auftritt (noch nicht live)"
     AuthUserFile /www/neu-gbs-bodensee/.htpasswd
     Require valid-user
     ```

## 3. Upload + Entpacken

```
sftp <user>@<ssh-host>
cd /www/neu-gbs-bodensee
put statamic-site-release-2026-11-07.tar.gz
sha256sum statamic-site-release-2026-11-07.tar.gz   # muss db3ddb46…dbf57 sein
tar -xzf statamic-site-release-2026-11-07.tar.gz
# Variante A: DocRoot auf /www/neu-gbs-bodensee/statamic-site/public zeigen
# Variante B: Paketinhalt direkt ins Zielverzeichnis schieben:
mv statamic-site/* statamic-site/.??* . 2>/dev/null && rmdir statamic-site
rm statamic-site-release-2026-11-07.tar.gz
```

## 4. Inbetriebnahme (per SSH auf dem IONOS-Server)

```
cd /www/neu-gbs-bodensee            # bzw. …/statamic-site bei Variante A
touch database/database.sqlite
php artisan migrate --force
php artisan storage:link
php artisan config:clear && php artisan cache:clear
chmod -R ug+rwX storage bootstrap/cache   # Schreibrechte für den Webserver
```

- `.env` liegt bereits produktiv im Paket
  (APP_ENV=production, APP_DEBUG=false, APP_URL=https://neu.gbs-bodensee.de,
  APP_KEY gesetzt). Nur sanity-checken, Key nicht im Klartext loggen:
  `grep -c '^APP_KEY=base64:' .env` → `1`
- DocRoot-Test: `https://neu.gbs-bodensee.de/` muss die Startseite zeigen,
  nicht den Verzeichnis-Index oder `index.php`.

## 5. Smoke-Checks nach dem Deploy

Alle im Browser durchklicken (Desktop + mobil 375 px):

- [ ] Startseite `/` lädt, **Karussell/Hero** sichtbar und klickbar
- [ ] `/aktuelles` (News-Übersicht) und News-Detail `/meldung/<slug>`
      (z. B. `/meldung/die-wunderbruehe-aus-okinawa`)
- [ ] `/termine` (Kalender-Karten)
- [ ] `/suche?q=kirche` liefert Treffer (**Suche**)
- [ ] `/kontakt`, `/ueber-uns`, `/impressum`, `/datenschutz`
- [ ] News-Bilder/Assets laden
- [ ] Mobile Ansicht (375 px): Menü, Karussell, Kalender lesbar
- [ ] **SPEZIELL: Kalender-Feed vom IONOS-Server abrufbar?**
  ```
  curl -s -o /dev/null -w "%{http_code}\n" \
    "https://gbs-termine.de/cal_teaser_short_gbs10.php?action=cal_teaser_short_gbs10&website_id=16"
  ```
  gbs-termine.de blockt teils externe Zugriffe. Ist der Feed vom
  IONOS-Server nicht erreichbar, zeigt `/termine` die Fallback-Anzeige →
  **Befund melden, NICHT überspielen.**

## 6. NACH PRODUKTIVSCHALTUNG

### 6A. Code-only-Deployments (nach jedem Repo-Commit)

Hochladen NUR Code – nie Live-Inhalte. Fertiger rsync-Befehl
(von der VM aus; eine `--exclude`-Zeile pro Ausschluss):

```
rsync -avz --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.env' \
  --exclude 'content/' \
  --exclude 'users/' \
  --exclude 'storage/' \
  --exclude 'public/assets/' \
  --exclude 'public/storage' \
  --exclude 'public/hot' \
  --exclude 'database/' \
  --exclude 'tests/' \
  ./ <user>@<ssh-host>:/www/neu-gbs-bodensee/
```

Hochgeladen wird damit nur: `app/`, `resources/`, `routes/`, `config/`,
`public/build/`, `vendor/` sowie `composer.json`/`composer.lock`,
`package.json`, `vite.config.js`.
**NIE hochladen:** `content/`, `users/`, `storage/`, `public/assets/`
(das sind Live-Inhalte!).

Alternative Code-only-Archiv-Variante (statt rsync):

```
tar -czf code-only.tar.gz \
  app resources routes config public/build vendor \
  composer.json composer.lock package.json vite.config.js
# dann: sftp/code-only.tar.gz hochladen, auf dem Server entpacken
```

### 6B. Inhalts-Rückhol-Runde (vor jedem Code-Deploy, sonst mind. monatlich)

Andreas lädt per SFTP vom Live-System herunter:

```
# Variante 1: lftp (einmalig lokal installieren)
lftp -e 'mirror --parallel=4 /www/neu-gbs-bodensee/content ./content; mirror --parallel=4 /www/neu-gbs-bodensee/public/assets ./public/assets; bye' \
  -u <user>,<pass> sftp://<ssh-host>

# Variante 2: klassisches sftp
sftp <user>@<ssh-host>:/www/neu-gbs-bodensee/content ./content
sftp <user>@<ssh-host>:/www/neu-gbs-bodensee/public/assets ./public/assets
```

Übergabe an die CLI → Übernahme ins Repo, Commit + Push.
Damit bleibt das Repo das **vollständige Inhalts-Backup**.

**Merksatz: Erst Inhalte von live ins Repo, dann Code von Repo auf live.**
