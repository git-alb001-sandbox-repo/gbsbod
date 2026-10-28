# Statamic-Site gbs-bodensee.de

Statamic-Neubau der Website des GBS-Bodensee e. V. (Regionalgruppe der
Giordano-Bruno-Stiftung). Bisher: Drupal 7; Design-Referenz: die
Regionalgruppen-Sites gbs-karlsruhe.de, gbs-stuttgart.de, gbs-muc.de.
Design-Tokens liegen in `resources/css/tokens.css`.

## Start

```bash
php please serve        # Dev-Server: http://127.0.0.1:8000
php please user make    # CP-User anlegen
```

Installation (falls `vendor/` fehlt): `composer install`;
Frontend-Build (falls nötig): `npm install && npm run dev`.

Konfiguration: `.env` (aus `.env.example`) – nicht im Git.
Im Live-Deployment: `APP_URL=https://gbs-bodensee.de` und
`APP_DEBUG=false` setzen.

## Struktur (Grundgerüst, TICKET-005)

- **Collections** (leer, nur Blueprints): `news` (Titel, Datum, Teaser,
  Bild, Inhalt), `termine` (Datum, Titel, Ort, Teaser, Link), `themen`
  (Titel, Beschreibung, Zielseite), `verbindungen` (Name, Logo, URL)
- **Globals**: `kontakt` (Vereinsdaten aus dem Impressum der alten Site),
  `social_media`, `footer_links`, `spenden` (PayPal-Button-ID)

## Regel: Mitgliedschaft

Die Mitgliedschaft läuft über den hbbk (Humanistisches Bildungszentrum
Bodensee). Es gilt ausschließlich ein **externer Link** auf

> https://www.hbbk-bodensee.org/mitglied-werden

Bewusst **KEIN** eigenes Formular, **KEIN** PDF-Download und **KEIN**
Mail-Link im Statamic. Von den alten PDF-Downloads (Aufnahmeantrag,
SEPA-Formular) wird nicht migriert.
