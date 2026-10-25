#!/usr/bin/env python3
"""Gibt aktuelle Systemressourcen aus: CPU, RAM und Festplatte.

Nutzt nur die Python-Standardbibliothek (Linux).
"""

import shutil
import time
from pathlib import Path


def cpu_auslastung(interval: float = 1.0) -> float:
    """Berechnet die CPU-Auslastung in Prozent über ein Messintervall."""
    def lese_zeiten() -> tuple[float, float]:
        felder = Path("/proc/stat").read_text().splitlines()[0].split()[1:]
        werte = [float(w) for w in felder]
        idle = werte[3] + (werte[4] if len(werte) > 4 else 0.0)  # idle + iowait
        return sum(werte), idle

    gesamt_1, idle_1 = lese_zeiten()
    time.sleep(interval)
    gesamt_2, idle_2 = lese_zeiten()

    delta_gesamt = gesamt_2 - gesamt_1
    delta_idle = idle_2 - idle_1
    if delta_gesamt <= 0:
        return 0.0
    return (delta_gesamt - delta_idle) / delta_gesamt * 100.0


def ram_infos() -> dict[str, float]:
    """Liest RAM-Belegung aus /proc/meminfo (in MiB)."""
    werte: dict[str, float] = {}
    with Path("/proc/meminfo").open() as f:
        for zeile in f:
            schluessel, rest = zeile.split(":", 1)
            werte[schluessel] = float(rest.strip().split()[0]) / 1024.0  # KiB -> MiB
    total = werte.get("MemTotal", 0.0)
    verfuegbar = werte.get("MemAvailable", 0.0)
    benutzt = total - verfuegbar
    return {
        "total": total,
        "benutzt": benutzt,
        "verfuegbar": verfuegbar,
        "prozent": benutzt / total * 100.0 if total else 0.0,
    }


def festplatten_infos(pfad: str = "/") -> dict[str, float]:
    """Liest Festplattenbelegung für ein Dateisystem (in GiB)."""
    benutzung = shutil.disk_usage(pfad)
    total = benutzung.total / 1024**3
    benutzt = benutzung.used / 1024**3
    frei = benutzung.free / 1024**3
    return {
        "pfad": pfad,
        "total": total,
        "benutzt": benutzt,
        "frei": frei,
        "prozent": benutzt / total * 100.0 if total else 0.0,
    }


def main() -> None:
    print("=== Systemressourcen ===\n")

    print(f"CPU-Auslastung : {cpu_auslastung():5.1f} %")

    ram = ram_infos()
    print(f"RAM            : {ram['benutzt']:6.1f} / {ram['total']:.1f} MiB "
          f"({ram['prozent']:.1f} % belegt, {ram['verfuegbar']:.1f} MiB frei)")

    platte = festplatten_infos("/")
    print(f"Festplatte ({platte['pfad']})  : {platte['benutzt']:6.1f} / {platte['total']:.1f} GiB "
          f"({platte['prozent']:.1f} % belegt, {platte['frei']:.1f} GiB frei)")


if __name__ == "__main__":
    main()
