var element = document.getElementById("tab");

// Überwache das Attribut 'aria-select' auf Änderungen
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "aria-select") {
            var newValue = element.getAttribute("aria-select");
            if (newValue === "true") {
                element.style.color = "white";
            } else {
                element.style.color = "initial"; // Zurücksetzen auf die Standardfarbe
            }
        }
    });
});

// Starte die Beobachtung des Elements
observer.observe(element, { attributes: true });

// Beispiel, wie du das Attribut ändern kannst
//element.setAttribute("aria-select", "true"); // Ändert die Farbe auf Blau
//element.setAttribute("aria-select", "false"); // Setzt die Farbe zurück
