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
        const newTaskElement = document.createElement("li");
        // Create the checkbox element
        const newCheckboxElement = document.createElement("input");
        newCheckboxElement.type = "checkbox"
        newTaskElement.appendChild(newCheckboxElement);
        // Create the task element
        const newTaskTextElement = document.createElement("p");
        newTaskTextElement.innerText = i.task;
        newTaskElement.appendChild(newTaskTextElement);
        // Append the full task element
        todoListElement.appendChild(newTaskElement);
    });

    app.appendChild(todoListElement);
})
