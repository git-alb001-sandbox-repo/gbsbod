<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * Kalender-Teaser von gbs-termine.de (TICKET-007).
 *
 * Portierung des WordPress-Codes von Peder (docs/kalender-api-peder.md):
 * GET mit Timeout 10 s und max. 3 Redirects, Ergebnis-HTML 15 Minuten
 * cachen, Termin-Links auf giordano-bruno-stiftung.de umschreiben und
 * als externe Links (target="_blank" rel="noopener noreferrer") öffnen.
 * Bei Fehler oder Leerantwort wird der Fallback-Text zurückgegeben,
 * aber nicht gecacht (nächster Aufruf versucht den Endpoint erneut).
 */
class GbsCalendar
{
    public const CACHE_KEY = 'gbs_calendar_teaser';
    public const CACHE_TTL = 900; // 15 Minuten

    private const ENDPOINT = 'https://gbs-termine.de/cal_teaser_short.php?action=cal_teaser_short&website_id=16';

    private const FALLBACK = '<p>Der Veranstaltungskalender ist momentan nicht erreichbar.</p>';

    public function teaserHtml(): string
    {
        $cached = Cache::get(self::CACHE_KEY);

        if ($cached !== null) {
            return $cached;
        }

        $html = $this->fetchTeaser();

        if ($html === null) {
            return self::FALLBACK;
        }

        Cache::put(self::CACHE_KEY, $html, self::CACHE_TTL);

        return $html;
    }

    private function fetchTeaser(): ?string
    {
        try {
            $response = Http::timeout(10)->maxRedirects(3)->get(self::ENDPOINT);
        } catch (\Throwable) {
            return null;
        }

        if (! $response->successful()) {
            return null;
        }

        $html = trim($response->body());

        if ($html === '') {
            return null;
        }

        Log::info('GBS-Kalender: Endpoint abgerufen.');

        return $this->rewriteLinks($html);
    }

    /**
     * Termin-Links aller bekannten Varianten auf den zentralen
     * GBS-Kalender umschreiben (wie im Original-Code von Peder).
     */
    private function rewriteLinks(string $html): string
    {
        $html = str_replace(
            [
                'href="/veranstaltungen?action=',
                'href="/termine?action=',
                'href="https://b421ud.myrdbx.io/veranstaltungen?action=',
                'href="https://b421ud.myrdbx.io/termine?action=',
                'href="https://gbs-stuttgart.de/veranstaltungen?action=',
                'href="https://gbs-stuttgart.de/termine?action=',
            ],
            'href="https://www.giordano-bruno-stiftung.de/termine?action=',
            $html
        );

        return preg_replace(
            '#<a([^>]+href="https://www\.giordano-bruno-stiftung\.de/termine\?action=[^"]*")#',
            '<a target="_blank" rel="noopener noreferrer"$1',
            $html
        ) ?? $html;
    }
}
