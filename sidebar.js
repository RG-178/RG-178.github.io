// Funktion zum Laden des Inhalts von "seiteninhalt.html" und Anzeigen in "seiteninhalt-container"
function loadSeiteninhalt() {
    var container = document.getElementById("sidebar");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sidebar.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Die Funktion aufrufen, um den Inhalt zu laden
loadSeiteninhalt();