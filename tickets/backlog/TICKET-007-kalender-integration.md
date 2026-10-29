# TICKET-007: Humanistischen Veranstaltungskalender einbinden

## Voraussetzung
TICKET-006 abgeschlossen (Partials verfügbar).

## Aufgabe
Den Kalender-Teaser von gbs-termine.de einbinden – Umsetzung des 
PHP-Codes von Peder (WordPress) in Statamic/Laravel. Die Details 
stehen fest (von Andreas mit der GBS geklärt):

- Endpoint: 
  https://gbs-termine.de/cal_teaser_short.php?action=cal_teaser_short&website_id=16
  (website_id=16 = GBS-Bodensee; öffentlicher GET, kein Login)
- GET mit Timeout 10 s, max. 3 Redirects
- Ergebnis-HTML 15 Minuten cachen (bei Statamic: Laravel Cache)
- Im gelieferten HTML alle Termin-Links umschreiben auf 
  https://www.giordano-bruno-stiftung.de/termine?action=… 
  (alle Link-Varianten wie im Original-Code: /veranstaltungen?, 
  /termine?, b421ud.myrdbx.io, gbs-stuttgart.de)
- Diese externen Links mit target="_blank" rel="noopener noreferrer" 
  versehen
- Fallback bei Fehler/Leerantwort: „Der Veranstaltungskalender ist 
  momentan nicht erreichbar."

## Schritte
1. Service-Klasse app/Services/GbsCalendar.php: lädt Endpoint 
   (Laravel HTTP Client, Http::timeout(10)), transformiert Links, 
   cachet 900 s (Cache::remember), Fallback-Text.
2. Antlers-Tag `{{ gbs_calendar_teaser / }}` registrieren, der den 
   HTML-String ausgibt (Partial `partials/kalender-teaser` mit 
   Wrapper <div class="gbs-calendar-grid">…</div>).
3. Minimal-Styling für .gbs-calendar-grid in site.css (Liste, 
   Termintitel petrol, Datum, Lesbarkeit).
4. Testseite (z. B. /termine oder eine Test-Route) einrichten, 
   die das Teaser-Partial rendert.
5. Funktionstest: curl auf die Seite – Termine aus dem echten 
   Endpoint sichtbar; Fallback testen durch absichtlich falsche 
   Endpoint-URL (temporär) → Fallback-Text erscheint; danach 
   korrekte URL wiederherstellen.
6. Commit ("TICKET-007: Kalender-Teaser integriert"), pushen.

## Akzeptanzkriterien
- Teaser zeigt echte Termine vom gbs-termine.de-Endpoint 
  (website_id=16)
- Links zeigen auf giordano-bruno-stiftung.de/termine, öffnen in 
  neuem Tab
- Cache wirkt (zweiter Seitenaufruf innerhalb 15 Min ohne 
  erneuten Endpoint-Call, z. B. per Log belegt)
- Fallback-Text bei nicht erreichbarem Kalender
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
