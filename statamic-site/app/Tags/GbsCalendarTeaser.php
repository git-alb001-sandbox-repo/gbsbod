<?php

namespace App\Tags;

use App\Services\GbsCalendar;
use Statamic\Tags\Tags;

/**
 * Gibt den gecachten Kalender-Teaser von gbs-termine.de als
 * HTML-String aus (TICKET-007).
 *
 * Verwendung: {{ gbs_calendar_teaser / }}
 */
class GbsCalendarTeaser extends Tags
{
    protected static $handle = 'gbs_calendar_teaser';

    public function index(): string
    {
        return app(GbsCalendar::class)->teaserHtml();
    }
}
