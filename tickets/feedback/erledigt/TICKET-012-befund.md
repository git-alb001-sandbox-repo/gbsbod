# Abnahmebefund TICKET-012 (Darstellung)

## 1. Lange Karten-Überschriften flexibel umbrechen

Lange Karten-Titel (z. B. „Evolutionspädagogik", 23.07.2026)
brechen derzeit nicht um. Bitte:

- Karten-Titel flexibel umbrechen lassen (innerhalb der
  Regel „maximal 2–3 Zeilen")
- Bei langen einzelnen Wörtern weiche Trennzeichen (&shy;)
  an syntaktisch korrekten Trennstellen in den card_title
  einfügen (z. B. „Evolutions&shy;pädagogik") – &shy; wirkt
  nur sichtbar, wenn umbrochen werden muss, und ist sonst
  unsichtbar
- Alle 108 Karten-Titel durchgehen: &shy; überall dort
  setzen, wo ein langes Wort den Umbruch verhindern würde
  (auch die 3 Pilot-Einträge prüfen)

## 2. Detail-Seiten: Fontgrößen nach Karlsruhe messen

Die Detail-Seiten der Meldungen weichen bzgl. der Fontgrößen
von gbs-karlsruhe.de ab. Bitte die Detail-Ansicht (Titel,
Datum, Fließtext, Zeilenabstände) wie im Piloten gerendert
messen (Headless-Browser) und site.css angleichen – gemessene
Werte, keine Schätzungen.

## Vorgehen

Commit, push, Frontend-Build, Funktionstest: Umbruch an den
langen Titeln verifizieren, Detail-Seiten gegen Karlsruhe.
