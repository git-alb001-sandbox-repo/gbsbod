# TICKET-026 Befund 2: Pages-Tree-Root per Entry-ID (nicht per Slug/Dateiname)

## Befund
`content/trees/collections/pages.yaml` referenzierte den Root-Eintrag
per `entry: home` (Slug/Dateiname). Nach Deploy + Befund 1 zeigte das
Live-System nichtdeterministisches Verhalten (Startseite renderte
zufällig Suche/Impressum, /impressum war 404), weil der Referenz
"dangling" war und Statamic mit leerem Baum einen Implizit-Fallback
mit unbestimmter Reihenfolge greifen ließ.

## Fix
Tree-Root zeigt jetzt auf die konkrete Entry-ID von `home.md`:

```yaml
tree:
  -
    entry: 049ed0c0-9796-43f7-b158-4f6129328c12
```

## Doku-Hinweis (allgemein)
Tree-Dateien (`content/trees/**`) referenzieren Einträge per **Entry-ID**,
nie per Dateiname/Slug. Bei ID-Änderungen von Einträgen (z. B. Neu-
anlage eines Entries) immer die Tree-Referenzen mitprüfen.

## VM-Kontrolle nach Fix
- `/` → `<title>START - gbs Bodensee</title>` (Startseite)
- `/impressum` → 200, `IMPRESSUM - gbs Bodensee`
- `/aktuelles` → `MELDUNGEN - gbs Bodensee`

Kein Deploy nötig – `content/` wird nicht hochgeladen; Live-Datei war
bereits korrekt.
