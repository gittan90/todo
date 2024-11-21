import "./style.css";

document.addEventListener("DOMContentLoaded", function() {

    const app = document.getElementById("app");
    const todoInputElement = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo-button");

    let todoArray = [
        {task: "Yoga", completed: false},
        {task: "Movement", completed: false},
        {task: "Study", completed: false},
    ];

    // Create todo list
    const todoListElement = document.createElement("ol");

    const createTodoElement = (task) => {
        const newTaskElement = document.createElement("li");
        // Create the checkbox element
        const newCheckboxElement = document.createElement("input");
        newCheckboxElement.type = "checkbox"
        newTaskElement.appendChild(newCheckboxElement);
        // Create the text element
        const newTaskTextElement = document.createElement("p");
        newTaskTextElement.innerText = task;
        newTaskElement.appendChild(newTaskTextElement);
        // Append the full task element
        todoListElement.appendChild(newTaskElement);
    };

    // Create and append all todo elements
    todoArray.forEach(i => {
        createTodoElement(i.task);
    });
    app.appendChild(todoListElement);

    // Add todo items to the todoArray on click 
    addTodoButton.addEventListener("click", () => {
        const newTodo = {
            task: todoInputElement.value, 
            completed: false
        };
        todoArray.push(newTodo);
        // Append to the DOM
        createTodoElement(newTodo.task);
    });
})
