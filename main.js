import "./style.css";


document.addEventListener("DOMContentLoaded", function() {

    const app = document.getElementById("app");

    const todos = [
        {task: "Yoga", completed: false},
        {task: "Movement", completed: false},
        {task: "Study", completed: false},
    ];

    // Create todo list
    const todoListElement = document.createElement("ol");

    todos.forEach(i => {
        const newElement = document.createElement("li");
        newElement.innerText = i.task;
        todoListElement.appendChild(newElement);

        console.log(i)
    });

    app.appendChild(todoListElement);
})


