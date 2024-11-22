import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const todoInputElement = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo-button");

  let todoArray = [];

  // Create todo list
  const todoListElement = document.createElement("ul");

  const renderTodos = () => {
    // Clear the list
    todoListElement.innerHTML = "";

    // Sort todos by completion status
    const sortedTodos = todoArray.slice().sort((a, b) => Number(a.completed) - Number(b.completed));

    // Render each todo
    sortedTodos.forEach((todo) => {
      const newTaskElement = document.createElement("li");
      const todoId = `todo-${todo.id}`;
      newTaskElement.id = todoId;

      // Create the checkbox element
      const newCheckboxElement = document.createElement("input");
      newCheckboxElement.type = "checkbox";
      newCheckboxElement.checked = todo.completed;
      newCheckboxElement.addEventListener("change", () => {
        todo.completed = newCheckboxElement.checked;
        renderTodos();
      });
      newTaskElement.appendChild(newCheckboxElement);

      // Create the text element
      const newTaskTextElement = document.createElement("p");
      newTaskTextElement.innerText = todo.task;
      newTaskElement.appendChild(newTaskTextElement);

      // Create the remove button
      const newCheckboxRemoveButton = document.createElement("button");
      newCheckboxRemoveButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      newCheckboxRemoveButton.className = "remove-button";
      const newId = `todo-remove-button-${todo.id}`;
      newCheckboxRemoveButton.id = newId;

      // Listen to remove button
      newCheckboxRemoveButton.addEventListener("click", () => {
        // Remove the todo by filtering it out
        todoArray = todoArray.filter((i) => i.id !== todo.id);
        renderTodos();
      });

      newTaskElement.appendChild(newCheckboxRemoveButton);

      // Append the full task element
      todoListElement.appendChild(newTaskElement);
    });
  };

  const createTodoElement = (task) => {
    // Get the highest todo id
    const highestId = Math.max(-1, ...todoArray.map((todo) => todo.id));

    // Create the new todo object
    const newTodo = {
      id: highestId + 1,
      task,
      completed: false,
    };

    // Add the new todo and render the list
    todoArray.push(newTodo);
    renderTodos();
  };

  // Append the todo list to the app
  app.appendChild(todoListElement);

  // Add new todos when the button is clicked
  addTodoButton.addEventListener("click", () => {
    const task = todoInputElement.value.trim();

    if (!task) {
      alert("Please enter a task");
      return;
    }

    createTodoElement(task);
    todoInputElement.value = "";
  });
});
