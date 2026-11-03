<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Suchindex regelmäßig neu bauen: Datei-/Git-Änderungen am Content
// aktualisieren den lokalen Suchindex nicht automatisch (nur CP-Änderungen).
// Aufruf auf dem Server (IONOS) minütlich per Cron: php please schedule:run
Schedule::command('search:update')->hourly();
