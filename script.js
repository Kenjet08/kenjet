let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();
    const errorDiv = document.getElementById("error");

    try {
        if (!taskInput) {
            throw new Error("¡Por favor ingrese una tarea válida!");
        }

        const newTask = {
            text: taskInput,
            completed: false
        };

        tasks.push(newTask);
        displayTasks();
        document.getElementById("taskInput").value = "";
        errorDiv.textContent = "";
    } catch (error) {
        errorDiv.textContent = error.message;
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task.text + (task.completed ? " ✅" : "");

        // Botón marcar/desmarcar
        const markBtn = document.createElement("button");
        markBtn.textContent = task.completed ? "Desmarcar" : "Marcar como realizada";
        markBtn.onclick = function () {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        };

        // Botón eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = function () {
            tasks.splice(i, 1);
            displayTasks();
        };

        li.appendChild(markBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

}
