# TICKET-026 BEFUND 2: Pages-Tree-Root im Repo zeigt auf nicht existierende ID

Nach Deploy von TICKET-026 + Befund 1 fiel auf dem LIVE-System auf: Die
Startseite renderte nichtdeterministisch die Such- bzw. Impressum-Seite,
/impressum war 404. URSACHE (lange Diagnose, Live bereits repariert):
statamic-site/content/trees/collections/pages.yaml referenziert den
Root-Eintrag per ENTRY-ID, und 'entry: home' ist dangling – home.md
trägt die UUID 049ed0c0-9796-43f7-b158-4f6129328c12. Mit leerem Baum
greift Statamic einen Implizit-Fallback mit unbestimmter Reihenfolge
(VM zufällig grün, IONOS nicht).

## FIX (im Repo)

    tree:
      -
        entry: 049ed0c0-9796-43f7-b158-4f6129328c12

1. Datei ändern, commit + push. KEIN Deploy nötig (content/ wird nie
   hochgeladen; die Live-Datei ist bereits korrekt).
2. VM-Kontrolle danach: / zeigt die Startseite mit
   "START - gbs Bodensee".
3. Doku-Hinweis in docs/: Tree-Dateien referenzieren Entry-IDs, nie
   Dateinamen – bei ID-Änderungen von Einträgen immer Tree-Referenzen
   mitprüfen.
