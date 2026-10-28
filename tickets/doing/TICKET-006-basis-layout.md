# TICKET-006: Basis-Layout (Header, Footer, CSS-Fundament)

## Voraussetzung
TICKET-005 abgeschlossen.

## Aufgabe
Das Grundgerüst aller Seiten bauen: Base-Template mit Head, sticky 
Header, Footer und CSS-Fundament auf Basis der Design-Tokens. 
Noch KEINE Inhalts-Sektionen der Startseite (folgt in 008).

## Schritte
1. Antlers-Layout `resources/views/layout.antlers.html`: 
   Head (Meta, title, charset, viewport), Body mit Header- und 
   Footer-Partial-Einbindung, {{ content }}-Bereich.
2. Partials `resources/views/partials/header.antlers.html`: 
   Sticky-Header (transparentes Menü auf Petrol-Banner #006879), 
   Logo links (100 px, sticky 70 px, Header normal ~143 px / 
   sticky ~115 px), Hauptmenü rechts (Home, Aktuelles, Termine, 
   Kontakt, Impressum/Datenschutz), runder Spenden-Button 
   (150 px, #BF3636, rotate(7deg), 22 px) – Linkziel: PayPal-
   Spendenlink aus Global `spenden`.
3. Partials `footer.antlers.html` und `social-links.antlers.html`: 
   Logo, Footer-Menü, Social-Media-Icons – Daten aus den 
   Globals `footer_links` und `social_media`.
4. CSS-Fundament `resources/css/site.css`: importiert tokens.css; 
   Basis-Typografie (Body 14 px/1.7, H1 30, H2 26, H3 22 px, 
   H2 in Epilogue Bold), Container max-width 1080 px, Breakpoints 
   479/767/980/1100/1350 px (Mobile-First).
5. Fonts selbst hosten (wie bei den Referenz-Sites): Bitter 
   (Medium, SemiBold), Epilogue (Bold) – OFL-lizenziert; als woff2 
   unter resources/fonts/ + @font-face in site.css. KEINE 
   Google-Fonts-Einbindung per CDN.
6. Navigations-Menü in Statamic anlegen (content/navigation/main.yaml) 
   und im Header-Partial ausgeben.
7. Funktionstest: php please serve → beliebige Seite zeigt 
   Header + Footer, Styles geladen, sticky-Verhalten im Browser.
8. Commit ("TICKET-006: Basis-Layout Header/Footer/CSS"), pushen.

## Akzeptanzkriterien
- Alle Seiten rendern mit Header (sticky, Spenden-Button) + Footer
- tokens.css wird verwendet, Farben/Schriften entsprechen der 
  Design-Inventur
- Fonts lokal gehostet (kein externer Font-CDN)
- Mobile-Ansicht: Menü bis 980/767/479 px brauchbar (Burger-Menü 
  o. ä. vereinfacht zulässig)
- Statuswechsel doing→done NUR nach manueller Prüfung durch Andreas
