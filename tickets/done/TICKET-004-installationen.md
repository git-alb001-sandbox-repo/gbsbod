# TICKET-004: Systemvoraussetzungen und Installationen

## Aufgabe
Alle für den Statamic-Neubau nötigen Werkzeuge installieren und 
verifizieren. NUR Installationen – noch KEINE Projektinhalte, 
Konfiguration oder Struktur (folgt in TICKET-005).

## Schritte
1. Vorhandensein prüfen und Versionen dokumentieren: 
   php (8.x?), composer, git. Fehlendes identifizieren.
2. Installationen JEWEILS kurz ankündigen, dann ausführen 
   (Regel AGENTS.md): php 8.x mit den für Statamic nötigen 
   Erweiterungen (mindestens: php-cli, php-xml, php-mbstring, 
   php-curl, php-zip, php-gd, php-sqlite3), composer.
3. Statamic-Skeleton installieren, Version GEPINNT auf die 
   6.38er-Linie: 
   composer create-project statamic/skeleton statamic-site "6.38.*"
   Danach in statamic-site/composer.json prüfen und die Constraint 
   für statamic/cms auf "6.38.*" festsetzen (kein ^-Range). 
   Installierte Statamic-Version im installations-nachweis.md 
   dokumentieren.
4. Funktionstest: 
   cd statamic-site && php please serve
   Statamic-Willkommensseite muss im Browser erreichbar sein. 
   Terminal-Ausgabe als Nachweis dokumentieren (Abschnitt in 
   docs/installations-nachweis.md: Versionen von php, composer, 
   Statamic; Datum; Ergebnis des Funktionstests).
5. Git: statamic-site/ committen ABER zuerst prüfen, dass 
   .env nicht committet wird (Skeleton bringt .gitignore mit – 
   verifizieren).
6. Commit (Message: "TICKET-004: Installationen für Statamic 
   abgeschlossen"), pushen.

## Akzeptanzkriterien
- php, composer, Statamic installiert; Versionen dokumentiert 
  in docs/installations-nachweis.md
- statamic/cms in composer.json auf "6.38.*" gepinnt 
  (kein ^-Range)
- php please serve startet fehlerfrei, Willkommensseite erreichbar
- .env NICHT im Git (per git status verifiziert)
- Keine inhaltlichen Änderungen an statamic-site/ außer dem, 
  was create-project erzeugt
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
