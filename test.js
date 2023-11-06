// Lade die JSON-Datei vom Server
const JSON_URL = 'tasks.json'; // Hier ersetzen Sie die URL durch den tatsächlichen Speicherort Ihrer JSON-Datei

function loadTasks() {
    fetch(JSON_URL)
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = ''; // Leere die aktuelle Liste

            data.tasks.forEach((taskText, index) => {
                const listItem = document.createElement("li");

                const taskTextElement = document.createElement("span");
                taskTextElement.textContent = taskText;
                listItem.appendChild(taskTextElement);

                const editButton = document.createElement("button");
                editButton.textContent = "Bearbeiten";
                editButton.onclick = () => editTask(index, taskText);
                listItem.appendChild(editButton);

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Löschen";
                deleteButton.onclick = () => deleteTask(index);
                listItem.appendChild(deleteButton);

                taskList.appendChild(listItem);
            });
        })
        .catch(error => console.error(error));
}

loadTasks(); // Lade Aufgaben beim Start der Seite

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;

    if (taskText) {
        fetch(JSON_URL)
            .then(response => response.json())
            .then(data => {
                data.tasks.push(taskText);
                return fetch(JSON_URL, {
                    method: 'PUT', // Sie müssen den richtigen HTTP-Verb entsprechend konfigurieren
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            })
            .then(() => {
                loadTasks(); // Aktualisiere die Liste nach dem Hinzufügen
                taskInput.value = ''; // Leere das Eingabefeld
            })
            .catch(error => console.error(error));
    }
}

function editTask(index, oldTaskText) {
    const newTaskText = prompt("Aufgabe bearbeiten:", oldTaskText);

    if (newTaskText !== null) {
        fetch(JSON_URL)
            .then(response => response.json())
            .then(data => {
                data.tasks[index] = newTaskText;
                return fetch(JSON_URL, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            })
            .then(() => {
                loadTasks(); // Aktualisiere die Liste nach der Bearbeitung
            })
            .catch(error => console.error(error));
    }
}

function deleteTask(index) {
    fetch(JSON_URL)
        .then(response => response.json())
        .then(data => {
            data.tasks.splice(index, 1);
            return fetch(JSON_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(() => {
            loadTasks(); // Aktualisiere die Liste nach dem Löschen
        })
        .catch(error => console.error(error));
}

function clearAllTasks() {
    if (confirm("Möchten Sie alle Aufgaben löschen?")) {
        fetch(JSON_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                loadTasks(); // Aktualisiere die Liste nach dem Löschen
            })
            .catch(error => console.error(error));
    }
}
