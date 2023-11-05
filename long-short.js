var dropdown = document.getElementById("long-short_drop");

  dropdown.addEventListener("change", function () {
      var ausgewählteOption = dropdown.options[dropdown.selectedIndex];

      if (ausgewählteOption.value === "long") {
          dropdown.style.backgroundColor = "green";
      } else {
          dropdown.style.backgroundColor = "red"; // Zurücksetzen auf die Standard-Hintergrundfarbe
      }
  });