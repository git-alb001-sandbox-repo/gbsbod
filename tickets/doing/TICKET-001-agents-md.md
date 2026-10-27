# TICKET-001: AGENTS.md auf das gbsbod-Projekt aktualisieren

## Aufgabe
Die Projektbeschreibung in AGENTS.md anpassen – sie beschreibt 
das Projekt noch als Übungsprojekt für Python-Skripte. Tatsächliches 
Projekt ist der Neubau der Vereinswebsite.

## Schritte
1. In AGENTS.md den Abschnitt "## Projekt" ersetzen durch:

   GBS-Bodensee e. V. (Regionalgruppe der Giordano-Bruno-Stiftung) 
   baut seine Website gbs-bodensee.de neu. Bisher Drupal 7, künftig 
   Statamic (PHP/Laravel, Flat-File). Design-Vorlage sind die 
   Regionalgruppen-Sites gbs-muc.de, gbs-stuttgart.de und 
   gbs-karlsruhe.de (WordPress, neues GBS-Design). WordPress ist 
   explizit keine Option.

2. Unter "## Konventionen" ergänzen:
   - PHP 8.x / Composer für Statamic (späteres Teilprojekt im Ordner 
     `statamic-site/`).
   - Keine Geheimnisse (Passwörter, Tokens) im Git – Konfiguration 
     gehört in .env (gitignored).

3. Commit (Message: "TICKET-001: AGENTS.md auf gbsbod-Projekt 
   aktualisiert"), pushen.

## Akzeptanzkriterien
- AGENTS.md beschreibt das echte Projekt (Statamic-Neubau der 
  Vereinswebsite) statt des Übungsprojekts
- Keine Änderungen an anderen Dateien
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
