fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Speichere die JSON-Daten in einer Variable
    const jsonData = data;
    
    // Aktualisiere das HTML
    const beispielPlaceholder = document.getElementById('beispiel-placeholder');
    beispielPlaceholder.textContent = jsonData.beispiel;
  })
  .catch(error => {
    console.error('Fehler beim Laden der JSON-Daten:', error);
  });
