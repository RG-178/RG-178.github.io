function aktualisiereUhrzeitUndDatum() {
    var jetzt = new Date();
    var stunden = jetzt.getHours();
    var minuten = jetzt.getMinutes();
    var sekunden = jetzt.getSeconds();
    
    // Aktuelles Datum holen
    var tag = jetzt.getDate();
    var monat = jetzt.getMonth() + 1; // Monate beginnen bei 0, daher +1
    var jahr = jetzt.getFullYear();
    
    // Füge führende Nullen hinzu, wenn nötig
    minuten = minuten < 10 ? "0" + minuten : minuten;
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    monat = monat < 10 ? "0" + monat : monat;
    tag = tag < 10 ? "0" + tag : tag;
    
    var uhrzeitAnzeige = stunden + ":" + minuten + ":" + sekunden;
    var datumAnzeige = tag + "." + monat + "." + jahr;
    
    // Kombiniere Uhrzeit und Datum mit einem Komma
    var uhrzeitUndDatum = uhrzeitAnzeige + "  <br>  " + datumAnzeige;
    
    document.getElementById("time").innerHTML = uhrzeitUndDatum;
}

// Aktualisiere die Uhrzeit und das Datum alle 1 Sekunde
setInterval(aktualisiereUhrzeitUndDatum, 1000);

// Rufe die Funktion zu Beginn auf
aktualisiereUhrzeitUndDatum();
