Befund TICKET-019 (Nachschärfen, Andreas 05.11.):

1. Zeilen 1–3: Zeilenabstand WEITER verringern (aktuell
   padding-block 4 px → z. B. 2–3 px; gerendert prüfen,
   gewählten Wert im Commit dokumentieren).
2. Grenze Zeile 3 → 4: MUSS den ORIGINAL-Abstand behalten!
   Separate Regel: .kontakt-liste li:nth-child(3) erhält
   padding-bottom wieder 10 px (Gap 3→4 = 10 + 1 + 10 =
   21 px wie ursprünglich). Zeile 4 bleibt unverändert.
3. Rollenspalte 297 px: von Andreas bestätigt korrekt –
   unverändert lassen.
4. Nachher-Screenshot (1920 px) nachziehen; Commit + push.
