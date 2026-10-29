# Kalender-API von Peder (GBS-Stiftung)

Quelle: Peder (Autor des DiviChild-Themes der Referenz-Sites),
Code erhalten 27.10.2026 per Mail. Grundlage für TICKET-007
(Kalender-Integration). WICHTIG: Der Beispiel-Code von Peder
enthält website_id=2 (eine andere Regionalgruppe) – für
GBS-Bodensee gilt website_id=16.

## Endpoint

    https://gbs-termine.de/cal_teaser_short.php?action=cal_teaser_short&website_id=16

- Öffentlicher GET-Request, kein Login/Token
- Liefert fertiges HTML (Teaser-Liste der nächsten Termine)

## Verarbeitungslogik (aus dem Original-Code)

1. HTML laden: Timeout 10 s, max. 3 Redirects
2. Ergebnis 15 Minuten cachen
3. Termin-Links umschreiben auf
   https://www.giordano-bruno-stiftung.de/termine?action=…
   – alle Varianten: href="/veranstaltungen?action=,
   href="/termine?action=, b421ud.myrdbx.io (beide Pfade),
   gbs-stuttgart.de (beide Pfade)
4. Diese externen Links mit target="_blank"
   rel="noopener noreferrer" versehen
5. Fallback bei Fehler/leerer Antwort:
   „Der Veranstaltungskalender ist momentan nicht erreichbar."
6. Layout-Wrapper: <div class="gbs-calendar-grid">…</div>

## Original-Code (WordPress-Variante, nur als Referenz)

```php
function gbs_calendar_teaser_shortcode() {
    $cache_key = 'gbs_calendar_teaser';
    $html      = get_transient( $cache_key );
    if ( false === $html ) {
        $response = wp_remote_get(
            'https://gbs-termine.de/cal_teaser_short.php?action=cal_teaser_short&website_id=16',
            array( 'timeout' => 10, 'redirection' => 3 )
        );
        if ( is_wp_error( $response ) ) {
            return '<p>Der Veranstaltungskalender ist momentan nicht erreichbar.</p>';
        }
        $html = wp_remote_retrieve_body( $response );
        if ( empty( $html ) ) {
            return '<p>Der Veranstaltungskalender ist momentan nicht erreichbar.</p>';
        }
        $html = str_replace(
            array(
                'href="/veranstaltungen?action=',
                'href="/termine?action=',
                'href="https://b421ud.myrdbx.io/veranstaltungen?action=',
                'href="https://b421ud.myrdbx.io/termine?action=',
                'href="https://gbs-stuttgart.de/veranstaltungen?action=',
                'href="https://gbs-stuttgart.de/termine?action='
            ),
            'href="https://www.giordano-bruno-stiftung.de/termine?action=',
            $html
        );
        $html = preg_replace(
            '#<a([^>]+href="https://www.giordano-bruno-stiftung.de/termine?action=[^"]*")#',
            '<a target="_blank" rel="noopener noreferrer"$1',
            $html
        );
        set_transient( $cache_key, $html, 15 * MINUTE_IN_SECONDS );
    }
    return $html;
}
add_shortcode( 'gbs_calendar_teaser', 'gbs_calendar_teaser_shortcode' );
