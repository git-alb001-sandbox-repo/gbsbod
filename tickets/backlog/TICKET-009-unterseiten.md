# TICKET-009: Unterseiten-Templates

## Voraussetzung
TICKET-008 abgeschlossen (Partials vorhanden).

## Aufgabe
Templates für alle statischen Seiten und Collection-Ansichten 
laut Inhalts-Inventur bauen.

## Schritte
1. news: Index-Seite (Grid 12/Seite, Pager) + Detail-Template 
   (Titel, Datum, Bild, Inhalt); Route /meldung/{slug} beibehalten 
   (alte URLs!). Seitenumbruch/Pagination nach Statamic-Standard.
2. termine: Seite mit Kalender-Teaser + Hinweistext.
3. themen: Index (Kacheln) + Detail.
4. verbindungen: Logo-Raster-Seite (Name, Logo, externer Link).
5. Statische Seiten (Collection pages o. Singletons): 
   Kontakt (Mailto-Links aus Global kontakt), Impressum 
   (Vereinsdaten), Datenschutz (Grundtext aus alter Site, 
   Analytics-Passagen entfernen), 404-Fehlerseite im 
   Vereinsdesign.
6. Menü/Navigations-Verlinkung prüfen (alle Punkte erreichbar).
7. Funktionstest: alle URLs aus der Inhalts-Inventur, die in der 
   neuen Site vorgesehen sind, aufrufbar und im Design.
8. Commit ("TICKET-009: Unterseiten-Templates"), pushen.

## Akzeptanskriterien
- Templates für news (Index+Detail), termine, themen, 
  verbindungen, Kontakt, Impressum, Datenschutz, 404 vorhanden
- /meldung/{slug}-Muster bleibt erhalten (SEO/Verlinkungen)
- Alle Navigationseinträge führen auf funktionierende Seiten
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
