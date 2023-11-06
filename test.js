function displayTasks() {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    todoList.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    });
}

// Funktion, um eine Aufgabe hinzuzufügen
document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();

    if (task !== '') {
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push(task);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        taskInput.value = '';
        displayTasks();
    }
});

// Funktion, um alle Aufgaben zu löschen
document.getElementById('clear-tasks').addEventListener('click', () => {
    localStorage.removeItem('todoList');
    displayTasks();
});

// Seite lädt, Anzeige der To-Do-Liste
window.addEventListener('load', () => {
    displayTasks();
});