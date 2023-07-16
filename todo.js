class ToDo {
    constructor() {
        //background color
        const bgc = new Background()
        const button = document.querySelector(".fa-toggle-off")
        const button2 = document.querySelector(".fa-toggle-on")
        button.addEventListener("click", bgc.blackMode)
        button2.addEventListener("click", bgc.brightMode)

        //add task
        const task = new Task()
        const addBtn = document.getElementById("addBtn");
        addBtn.addEventListener("click", task.addTask)
    }
}

const todo = new ToDo()
