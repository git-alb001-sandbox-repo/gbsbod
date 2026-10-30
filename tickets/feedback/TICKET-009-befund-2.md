# Abnahmebefund TICKET-009, Nachtrag: ÜBER-UNS-Struktur

Die umgesetzte Dropdown-Lösung wird zurückgebaut. Gewünscht
ist stattdessen EINE Seite mit Sektionen:

## Zielzustand

1. Eine einzige Seite /ueber-uns mit Text-Sektionen in dieser
   Reihenfolge:
   - „Die GBS": Text der alten Site, mit externem Link zur
     Stiftungs-Website (giordano-bruno-stiftung.de)
   - „Hochschulgruppe": bisheriger Inhalt der Unterseite
     /hochschulgruppe (alte Drupal-Site)
   - „Netzwerk": bisheriger Inhalt der Unterseite /netzwerk
     (alte Drupal-Site)
   - „Verbindungen": kurzer Teaser-Text mit Link auf
     /verbindungen – KEIN eingebettetes Logo-Raster, keine
     eigene Unterseite mehr
2. Zwischenüberschriften wie auf der Startseite über das
   bestehende section-heading-Partial.
3. Header: KEIN Dropdown mehr. ÜBER UNS ist ein einzelner
   Menüpunkt direkt auf /ueber-uns. Reihenfolge unverändert:
   MELDUNGEN · TERMINE · ÜBER UNS · KONTAKT · Suchlupe.
4. Die Unterseiten /hochschulgruppe und /netzwerk entfallen
   mitsamt ihren Einträgen (Seite ist noch nicht live,
   keine Redirects nötig). /verbindungen bleibt unverändert
   als eigenständige Seite.
5. Das für das Dropdown gebaute CSS und JS wird sauber
   entfernt (kein toter Code).
6. Mobile: Burger-Menü ohne Pfeil-Toggle, ÜBER UNS ist ein
   normaler Menüpunkt.

## Abnahme-Kriterium

/ueber-uns zeigt die vier Themen untereinander als Sektionen,
Verbindungen endet mit Link auf die Partnerseite; der Header
hat kein Dropdown mehr, Desktop und mobil.

## Vorgehen

Committen und pushen, Frontend neu bauen, Funktionstest.
