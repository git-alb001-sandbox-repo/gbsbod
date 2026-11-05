# TICKET-018: Leere Sammlungen entfernen (termine + themen)

Andreas-Entscheidung 05.11.: Beide leeren Sammlungen werden
nicht benötigt und komplett entfernt.

1. TERMINE-SAMMLUNG LÖSCHEN:
   - content/collections/termine.yaml + Ordner termine/
   - Blueprint resources/blueprints/collections/termine.yaml
     (falls vorhanden), Fieldsets prüfen
   - 'collection:termine' aus config/statamic/search.php
     (searchables) entfernen
   - Vorher grep über Views/Inhalte: keine Referenzen auf
     collection:termine oder /termine/{slug}-Detailseiten

2. THEMEN KOMPLETT ENTFERNEN:
   - content/collections/themen.yaml + Ordner themen/
   - Blueprint resources/blueprints/collections/themen.yaml
   - Statische Seite pages/themen.md (Route /themen)
   - Templates themen-index.antlers.html + themen.antlers.html
   - 'collection:themen' aus search.php entfernen
   - NAV-BAUM aktualisieren: /themen aus content/navigation/
     main.yaml entfernen – sonst bleibt ein toter Menü-Punkt!
   - CSS aufräumen: .themen-grid/.themen-kachel-Regeln aus
     site.css entfernen
   - Repo-weiter grep auf "/themen" (Links in Templates,
     Footer, Inhalten) – gefundene Verweise beseitigen

3. SUCHE REINDEXEN: php please search:update nach der
   Config-Änderung; Treffertest news + pages.

4. /themen-NACHLAUF: Prüfen, ob die alte Drupal-Site /themen
   als öffentliche URL hatte (Sitemap/Archiv). Falls ja:
   Redirect /themen → Startseite in routes/web.php einrichten
   (alte Suchmaschinen-/Bookmark-Links landen weich), sonst
   bewusst 404 dokumentieren.

5. VERIFIKATION: Build + Funktionstest aller Seitentypen;
   gerendertes Hauptmenü OHNE Themen-Eintrag; Suche funk-
   tioniert (Treffer aus news/pages); Screenshots Nav +
   /themen-Verhalten in docs/; Commit + push.

AKZEPTANZ: Beide Sammlungen samt Blueprints/Templates/CSS
entfernt, Nav ohne toten Punkt, Suche reindexiert und
funktional, grep-Nachweis über keine Rest-Referenzen,
Nav-Screenshot als Nachweis in docs/.
