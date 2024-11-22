import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const todoInputElement = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo-button");

  let todoArray = [];

  // Create todo list
  const todoListElement = document.createElement("ul");

  const createTodoElement = (task) => {
    // Get the highest todo id
    const highestId = Math.max(-1, ...todoArray.map((todo) => todo.id));

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
    newCheckboxElement.type = "checkbox";
    newTaskElement.appendChild(newCheckboxElement);

    // Create the text element
    const newTaskTextElement = document.createElement("p");
    newTaskTextElement.innerText = task;
    newTaskElement.appendChild(newTaskTextElement);

    // Create the remove button
    const newCheckboxRemoveButton = document.createElement("button");
    newCheckboxRemoveButton.innerText = "x";
    newCheckboxRemoveButton.className = "remove-button";
    const newId = `todo-remove-button-${newTodo.id}`;
    newCheckboxRemoveButton.id = newId;

    // Listen to remove button
    newCheckboxRemoveButton.addEventListener("click", () => {
      // Remove the todo by creating a new array
      todoArray = todoArray.filter((i) => i.id !== newTodo.id); 
      // Remove from DOM
      const targetedElement = document.getElementById(todoId);
      targetedElement.remove();
    });

    newTaskElement.appendChild(newCheckboxRemoveButton);

    // Append the full task element
    todoListElement.appendChild(newTaskElement);
  };

  // Create and append all todo elements
  todoArray.forEach((i) => {
    createTodoElement(i.task);
  });
  app.appendChild(todoListElement);

  // Add todo items to the todoArray on click
  addTodoButton.addEventListener("click", () => {
    const task = todoInputElement.value.trim(); 

    if (!task) {
      alert("Please enter a task"); 
      return; 
    }

    // Append the new task to the DOM
    createTodoElement(task);
    todoInputElement.value = "";
  });
});
