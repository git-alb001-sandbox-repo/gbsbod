# TICKET-003: Inhalts-Inventur der bestehenden Website gbs-bodensee.de

## Aufgabe
Die aktuelle Drupal-7-Website gbs-bodensee.de vollständig inventarisieren 
als Grundlage für den Content-Umzug in das neue Statamic-Setup. 
ZUSÄTZLICH: dokumentieren, wie der Humanistische Veranstaltungskalender 
(Pflicht-Feature der neuen Website) aktuell eingebunden ist.

## Schritte
1. Startseite per curl laden und die Startseiten-Inhalte vollständig 
   erfassen: alle Sektionen, Texte, Menüpunkte, Links, Bilder, Formulare.
2. WICHTIG – Kalender-Einbindung analysieren: Wie genau ist der 
   "Humanistische Veranstaltungskalender" (von der GBS-Stiftung 
   verwaltet) auf der Startseite unter "Aktuelle Termine" eingebunden? 
   Prüfen: iFrame? RSS/Atom-Feed? JavaScript? Drupal-Modul? Externe 
   URL? Alle zugehörigen URLs und Technik-Details notieren.
3. Alle Unterseiten auflisten (Sitemap oder Menü-Links folgen), 
   je Seite: Titel, Zweck, Inhaltstyp (statisch/Blog/Termin/Formular), 
   grober Umfang.
4. Formulare erfassen (Kontakt, Newsletter, sonstige): Felder, 
   wohin werden sie gesendet?
5. Medien inventarisieren: Bilder/PDFs, die referenziert werden.
6. Ergebnis als docs/inhalts-inventur.md ablegen, committen 
   (Message: "TICKET-003: Inhalts-Inventur der bestehenden Website").

## Akzeptanzkriterien
- docs/inhalts-inventur.md existiert mit: vollständiger 
  Seitenliste, Sektions-/Inhaltsbeschreibung der Startseite, 
  Formular-Übersicht, Medienliste
- Der Abschnitt zur Kalender-Einbindung nennt die exakte Technik 
  und alle beteiligten URLs (Grundlage für eine spätere API-Anfrage 
  bei der GBS-Stiftung)
- Keine Änderungen an anderen Dateien außer docs/inhalts-inventur.md
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
