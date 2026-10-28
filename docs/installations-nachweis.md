# Installations-Nachweis (TICKET-004)

## Versionen (Stand: 2026-10-28)

| Werkzeug | Version | Quelle |
|----------|---------|--------|
| PHP      | 8.3.6 (cli, NTS) | apt (Ubuntu/Mint noble, php8.3-Pakete) |
| Composer | 2.7.1 | apt |
| Git      | 2.43.0 | bereits installiert |
| Statamic CMS | 6.38.0 | packagist (statamic/cms, gepinnt auf `6.38.*`) |
| Laravel Framework | ^13.17 | mit Skeleton installiert |

Installierte PHP-Erweiterungen (für Statamic nötig): cli, xml, mbstring,
curl, zip, gd, sqlite3 (zusätzlich vorhanden: ctype, dom, fileinfo,
openssl, tokenizer).

## Statamic-Installation

- Projekt angelegt mit `composer create-project statamic/statamic statamic-site`
  (Skeleton-App, Typ `project`; das Paket `statamic/skeleton` ist auf
  Packagist nicht verfügbar).
- Constraint für `statamic/cms` in `statamic-site/composer.json` auf
  `"6.38.*"` festgesetzt (kein `^`-Range) und per `composer update`
  installiert: **Statamic 6.38.0** (`php please --version`).

## Funktionstest (2026-10-28, ~12:52 Uhr)

```
$ cd statamic-site && php please serve

   INFO  Server running on [http://127.0.0.1:8000].

  Press Ctrl+C to stop the server
```

- `curl http://127.0.0.1:8000/` → **HTTP-Status: 200**
- Ausgelieferte Seite: Startseite („Home"), Titel `<title>Home</title>`
- Willkommensseite im Browser erreichbar unter http://127.0.0.1:8000
- Testserver nach dem Test wieder gestoppt.

## Git-Check

- `statamic-site/.env` wird ignoriert (verifiziert mit
  `git check-ignore statamic-site/.env` → Match über
  `statamic-site/.gitignore`) und erscheint nicht in `git status`.
- `statamic-site/` wurde unverändert so committet, wie
  `create-project` es erzeugt hat (plus gepinnter
  `composer.json`/`composer.lock`).
