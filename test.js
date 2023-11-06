// Funktion zum Hinzufügen einer Aufgabe zur Liste
function addTask() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;

    if (taskText) {
        // Aufgabe zur Liste hinzufügen
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);

        // Aufgabe im LocalStorage speichern
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Textfeld leeren
        taskInput.value = "";
    }
}

// Aufgaben aus dem LocalStorage beim Laden der Seite wiederherstellen
window.addEventListener("load", function() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    tasks.forEach(function(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
    });
});
