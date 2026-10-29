TICKET-006-Abnahme, Font-Befund: Header-Menü und Spenden-Button verwenden 
Epilogue, Footer und Fließtext Bitter – korrekt wäre: Menüs (Header UND Footer) 
und Body in Bitter, Epilogue nur für Überschriften (H1–H3, Section-Headings). 
Bitte prüfe zur Sicherheit gegen die Referenz-Sites (z. B. gbs-stuttgart.de 
laden und per CSS-Inspektion/curl prüfen, welche font-family dort auf die 
Hauptnavigation angewendet wird) und stelle unser CSS entsprechend um. 
Zusätzlich prüfen: dass die woff2-Dateien selbst korrekt zugeordnet sind 
(Bitter-Dateien enthalten Bitter, Epilogue-Datei enthält Epilogue – z. B. 
durch Rendern einer Testzeile in beiden Fonts oder Abgleich der Dateien mit 
den Google-Fonts-Originalen). Nach dem Fix committen und pushen.
