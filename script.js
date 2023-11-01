fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Kompiliere die Handlebars-Vorlage
    const source = document.getElementById('template').innerHTML;
    const template = Handlebars.compile(source);

    // Füge die JSON-Daten in die Vorlage ein
    const context = data;
    const html = template(context);

    // Aktualisiere das HTML
    document.body.innerHTML = html;
  })
  .catch(error => {
    console.error('Fehler beim Laden der JSON-Daten:', error);
  });
