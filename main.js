import "./style.css";

document.addEventListener("DOMContentLoaded", function() {

    const app = document.getElementById("app");
    const todoInputElement = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo-button");

    let todoArray = [
        {id: 0, task: "Yoga", completed: false},
        {id: 1, task: "Movement", completed: false},
    ];

    // Create todo list
    const todoListElement = document.createElement("ol");

    const createTodoElement = (task) => {
        // Get the highest todo id
        const highestId = Math.max(...todoArray.map(todo => todo.id));

        // Create the new todo object
        const newTodo = {
            id: highestId + 1,
            task,
            completed: false,
        };
        // Push to the todoArray
        todoArray.push(newTodo);
        // Create task element
        const newTaskElement = document.createElement("li");
        const todoId = `todo-${newTodo.id}`;
        newTaskElement.id = todoId;

        // Create the checkbox element
        const newCheckboxElement = document.createElement("input");
        newCheckboxElement.type = "checkbox"
        newTaskElement.appendChild(newCheckboxElement);
        // Create the text element
        const newTaskTextElement = document.createElement("p");
        newTaskTextElement.innerText = task;
        newTaskElement.appendChild(newTaskTextElement);

        // Create the remove button
        const newCheckboxRemoveButton = document.createElement("button");
        newCheckboxRemoveButton.innerText = "X";
        newCheckboxRemoveButton.className = "remove-button";
        const newId = `todo-remove-button-${newTodo.id}`;
        newCheckboxRemoveButton.id = newId;
        // Listen to remove button
        newCheckboxRemoveButton.addEventListener("click", () => {
            // Remove the todo by creating a new array 
            const newTodoArray = todoArray.map(i => {
                if (i.id !== newId) {
                    return i;
                } 
            });
            todoArray = newTodoArray;
            // Remove from DOM
            const targetedElement = document.getElementById(todoId);
            targetedElement.remove();
        });

        newTaskElement.appendChild(newCheckboxRemoveButton);

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
        // Append to the DOM
        createTodoElement(newTodo.task);
        todoInputElement.value = "";
    });
})
