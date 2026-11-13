<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Suchindex regelmäßig neu bauen: Datei-/Git-Änderungen am Content
// aktualisieren den lokalen Suchindex nicht automatisch (nur CP-Änderungen).
// Schedule::call statt Schedule::command: SAPI-unabhängig – auf IONOS
// (Shell-php ist die CGI-Binary, runningInConsole() = false) registriert
// Statamic die Search-Commands nicht, ein direkter Facade-Aufruf schon.
Schedule::call(fn () => \Statamic\Facades\Search::index('default')->update())->hourly();
