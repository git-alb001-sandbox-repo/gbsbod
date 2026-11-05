# TICKET-019: Kontakt-Seite – Vorsitzende enger, Rollenspalte breiter

Vorgabe Andreas (05.11.):

1. ZEILENABSTAND: Die drei Vorsitzenden (Zeilen 1–3 der
   Ansprechpartner-Liste im Kontakt-Global) sollen UNTER-
   EINANDER ENGER stehen. Die beiden folgenden Zeilen
   (Hochschulgruppe, hbbk) behalten den bisherigen Abstand.
   Umsetzung: CSS-Regel .kontakt-liste li:nth-child(-n+3)
   mit reduziertem padding-block (aktuell 10 px; z. B. 4 px
   – gerendert prüfen, gewählten Wert im Commit doku-
   mentieren). Trennlinien bleiben unverändert. Positions-
   basierte Auswahl ist bewusst (Vorsitzende stehen im
   Global zuerst); Entscheidung im Commit dokumentieren.

2. ROLLENSPALTE VERBREITERN: .kontakt-rolle hat min-width
   240 px – zu schmal für die längste Rolle „3. Vorsitzender
   (Kassier):", dahinter bleibt kein Abstand zum Namen.
   Verbreitern um ~57 px (1,5 cm) auf ~297 px; gerendert
   prüfen: hinter der längsten Rolle ist wieder Luft, und
   die Namen richten sich an einer gemeinsamen Flucht aus.
   Mobile-Regel (≤980 px: .kontakt-rolle wird display:block,
   Rolle über dem Namen) bleibt unberührt.

3. VERIFIKATION GERENDET: Vorher/Nachher-Screenshots der
   Kontakt-Seite (Desktop 1920 px; kurz Mobil prüfen, dass
   das Block-Layout unverändert ist); Build + Funktionstest,
   Commit + push.

AKZEPTANZ: Zeilen 1–3 deutlich enger, Zeilen 4–5 unver-
ändert; Rollenspalte so breit, dass hinter „…(Kassier):"
wieder Abstand zum Namen bleibt (gewählter px-Wert im
Commit dokumentiert); Screenshots in docs/.
