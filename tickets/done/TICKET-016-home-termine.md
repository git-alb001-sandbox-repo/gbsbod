# TICKET-016: Startseiten-Termine – max. 3 + Einleitungssatz

Auf der Startseite zeigt der Abschnitt „Aktuelle Termine"
(home.antlers.html → partial:kalender-teaser) denselben
Kalender-Teaser wie /termine. Vorgabe Andreas:

1. NUR 3 TERMINE auf der Startseite anzeigen.
2. Darüber derselbe Einleitungssatz wie auf /termine:
   „Auszug aus dem GBS-Kalender." – mit Link auf
   https://www.giordano-bruno-stiftung.de/termine
   (extern, target="_blank" rel="noopener noreferrer").

UMSETZUNGSHINWEISE (Einfachheitsprinzip):
- Der Endpoint (docs/kalender-api-peder.md) liefert fertiges
  HTML mit fester Anzahl, es gibt keinen count-Parameter.
- Zuerst die HTML-Struktur der Teaser-Antwort analysieren
  (Welches Element = 1 Termin? Direkte Kinder von
  .gbs-calendar-grid?).
- Variante A (bevorzugt, wenn Struktur sauber): CSS-Begren-
 zung, NUR auf die Startseiten-Sektion gescoped – alles ab
  dem 4. Termin-Element ausblenden. /termine unberührt.
- Variante B (falls Struktur kein sauberes CSS erlaubt):
  GbsCalendar-Service um Limit erweitern (erste 3 Termin-
  Elemente behalten), getrennt cachen; /termine weiter
  unbegrenzt.
- Gewählte Variante im Commit dokumentieren.
- Einleitungssatz im Home-Template zwischen Section-Heading
  und Teaser ergänzen (gleicher Wortlaut + gleiches Link-
  Markup wie im termine-Entry). Die Duplizierung zum
  Entry-Content ist bewusst; falls der Satz später
  CP-editierbar sein soll → als Global auslagern.

AKZEPTANZ: Startseite zeigt genau 3 Termine (weniger, wenn
der Feed weniger liefert) + Einleitungssatz mit Link;
/termine zeigt weiterhin die volle Liste; gerenderte
Vorher/Nachher-Screenshots beider Seiten als Nachweis in
docs/; Build + Funktionstest, Commit + push.
