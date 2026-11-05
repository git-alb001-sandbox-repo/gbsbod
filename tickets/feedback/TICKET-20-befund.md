Befund TICKET-020 (korrigiert, Andreas 05.11.):

1. ENDPOINT: website_id auf 16 korrigieren – NUR die ID
   ändern. Der Kalender enthält schon immer Bilder, die
   Bild-Lieferung funktioniert (bewiesen über die falsche
   ID) – es war ausschließlich die falsche website_id
   (Stuttgarts Termine). NICHTS weiter am Endpoint ändern,
   KEINE externen Abhängigkeiten.

2. FORMATE (Breite + 3 pro Zeile):
   - Spaltenbreite GENAU wie die News-Karten: Kalender-
     Raster auf die news-grid-Logik umstellen (CSS-Grid
     repeat(3, 1fr), gleicher Gap). Die -16-px-Wrapper-
     Konstruktion mit der falschen Flex-Formel
     calc((100% - 64px)/3) ersatzlos entfernen – sie ließ
     die 3. Karte umbrechen.
   - Mobil: 1 Karte pro Zeile (wie news-grid).
   - Gilt für Startseite (genau 3 Karten, eine Zeile)
     und /termine (alle Termine, 3 pro Zeile).

3. SONST NICHTS: Keine weiteren Analysen, keine Anfragen
   an Dritte, keine Zusatzoptionen. Falls der Feed mit
   id=16 wider Erwarten anders antwortet als erwartet:
   NICHT selbst lösen, sondern zurückmelden.

4. VERIFIKATION: Gerenderte Screenshots (1920 + 375):
   Startseite – 3 Termine NEBENEINANDER, Spaltenbreite
   identisch zu den Meldungen darüber (beide Abschnitte im
   selben Screenshot); /termine – alle Termine im 3er-
   Raster; Stichprobe: gezeigte Termine sind BODENSEE-
   Veranstaltungen (Titel/Ort). Commit + push.
