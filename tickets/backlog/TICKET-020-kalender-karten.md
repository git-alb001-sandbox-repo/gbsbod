# TICKET-020: Kalender-Teaser im Stuttgart-Format (mit Bildern, 3er-Raster)

Vorgabe Andreas (05.11.): Das Format des Kalender-Auszugs auf
gbs-stuttgart.de/#termine gefällt erheblich besser – dort
erscheinen die Termine als KARTEN NEBENEINANDER MIT BILDERN
aus dem Kalender.

ZIEL:
1. STARTSEITE: weiterhin genau 3 Termine, jetzt NEBENEIN-
   ANDER (eine 3er-Reihe), Format wie Stuttgart.
2. TERMINE-SEITE (/termine): ALLE Termine des Auszugs,
   jeweils 3 pro Zeile (responsives Raster).

UMSETZUNG:
- STUTTGARTER IMPLEMENTIERUNG ANALYSIEREN (Quelltext von
  gbs-stuttgart.de laden): Welcher Endpoint/Parameter von
  gbs-termine.de liefert die Bild-Variante? (aktuell nutzen
  wir cal_teaser_short – vermutlich eine andere action;
  Antwort-HTML-Struktur inkl. Bild-Markup dokumentieren)
- Endpoint im GbsCalendar-Service umstellen. Bild-URLs im
  Antwort-HTML vermutlich relativ → auf gbs-termine.de
  umschreiben (Base-URL-Rewrite). Fehlende Bilder einzelner
  Termine: Fallback-Verhalten exakt wie Stuttgart (messen,
  nicht raten – z. B. Platzhaltergrafik).
- KARTEN-OPTIK 1:1 AN STUTTGART GERENDET GEMESSEN: Raster-
  Verhalten (3 Spalten Desktop, Umbruch Mobile), Karten-
  styling, Bildformat/Schnitthöhe, Datumsdarstellung, Titel-
  und Ortszeile – Werte im Commit dokumentieren.
- Caching (15 Min), Link-Rewriting auf giordano-bruno-
  stiftung.de (target/rel) und Fallback-Text unverändert
  übernehmen.
- HOME-BEGRENZUNG AUF 3 TERMINE mit dem NEUEN HTML prüfen
  und erhalten (bestehende Begrenzungs-Regel aus TICKET-016
  ggf. an neue HTML-Struktur anpassen).
- Einleitungssatz „Auszug aus dem GBS-Kalender." auf /
  termine bleibt, wo er ist.

VERIFIKATION: Vorher/Nachher-Screenshots Startseite +
/termine (1920 px und 375 px) + Side-by-side mit Stuttgart-
Referenz; Build + Funktionstest; Commit + push.

AKZEPTANZ: Termine erscheinen als Bild-Karten im 3er-Raster
im Stuttgart-Format (Optik gerendert gemessen, Parameter im
Commit dokumentiert); Startseite zeigt genau 3, /termine
alle im 3er-Raster; Caching/Link-Rewriting/Fallback un-
verändert funktional; Screenshots in docs/.
