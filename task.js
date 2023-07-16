class Task {
    constructor() {
        this.tasks = [];
        this.addInput = document.getElementById("taskInput");
        this.tasksList = document.getElementById("taskList");
    }

    addTask = e => {
        e.preventDefault();
        if (!this.addInput.value) return;
        const task = document.createElement("li");
        task.innerHTML = this.addInput.value + " <button>Remove</button>";
        this.tasksList.appendChild(task);
        this.addInput.value = "";
        this.tasks.push(task);
        this.tasks.forEach((task, index) => {
            task.id = index;
            task.querySelector("button").addEventListener("click", this.removeTask);
        });
    }

    removeTask = (e) => {
        const taskElement = e.target.parentNode;
        const index = this.tasks.findIndex(task => task === taskElement);
        if (index !== -1) {
            taskElement.remove(); // Usuń zadanie z drzewa DOM
            this.tasks.splice(index, 1); // Usuń zadanie z listy this.tasks
        }
    }
}
