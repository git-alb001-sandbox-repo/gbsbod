# TICKET-021: Nachzug – neueste Meldung der alten Site migrieren

Auf der alten Drupal-Site (www.gbs-bodensee.de) ist ein NEUER
Meldungseintrag erschienen (nach dem Stand der 107 migrierten
Einträge aus TICKET-005/006). Nachzug gemäß dem etablierten
Migrationsprozess.

1. IDENTIFIZIEREN: Neueste Meldung der alten Site ermitteln
   (Quelle aus der VM ziehen, curl – extern blockt die Site).
   Abgleich gegen den migrierten Bestand: der Eintrag, der
   noch nicht in Statamic existiert. Falls MEHR als ein neuer
   Eintrag existiert: alle nachziehen und im Commit zählen.

2. MIGRIEREN gemäß etabliertem Prozess (TICKET-005/006):
   - Frontmatter: Titel, Datum, Autor, Kategorie wie Bestand
   - Text inkl. Bild/Bildunterschrift; Drupal- → Statamic-
     Markup-Übersetzung nach den Regeln der 107er-Migration
   - Bild nach public/assets/news/ inkl. Metadaten-Datei
   - Slug-Konvention wie Bestand

3. VERIFIKATION:
   - News-Bestand danach 108 Einträge
   - Gerenderte Prüfung: Eintrag im News-Index sichtbar,
     Detailseite korrekt (Bild, Formatierung, Autor, Datum)
   - Bei neuer/unbekannter Kategorie: zurückmelden statt
     improvisieren
   - Screenshots in docs/; Commit + push.

AKZEPTANZ: Neuer Eintrag vollständig migriert und gerendert
verifiziert; Bestand 108; Format identisch zum etablierten
Migrationsstandard.
