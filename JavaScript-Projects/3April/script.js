const inputbox = document.querySelector(".input-text");
const Addbtn = document.querySelector("button");
const todolist = document.querySelector("ul");

let todoArray = JSON.parse(localStorage.getItem("todolist")) || [];
let editing = false;
let currentTodo = null;

// Function to render todos from localStorage
function renderTodos() {
  todolist.innerHTML = "";
  todoArray.forEach((todos, index) => {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
      <div class="todo-style"> 
        <li class="todoo ${todos.completed ? 'todo-text' : ''}">${todos.todoName}</li> 
      </div>
      <div class="buttons">
        <button class="completeTodo">${todos.completed ? 'Undo' : 'Complete'}</button>
        <button class="editTodo">Edit</button>
        <button class="removeTodo">Remove</button>
      </div>
    `;

    todolist.appendChild(todo);
    inputbox.value = "";

    const todoBtns = todo.querySelectorAll("button");
    todoBtns.forEach(tobtn => {
      tobtn.classList.add("todobtn");
    });

    const todotextContainer = todo.querySelector("li");
    const completeBtn = todo.querySelector(".completeTodo");
    const editBtn = todo.querySelector(".editTodo");
    const removeBtn = todo.querySelector(".removeTodo");

    // Edit functionality
    editBtn.addEventListener("click", function() {
      inputbox.value = todotextContainer.textContent;
      Addbtn.textContent = "Edit";
      editing = true;
      currentTodo = { element: todotextContainer, index };
    });

    // Complete functionality
    completeBtn.addEventListener("click", function() {
      // Toggle completed status
      todoArray[index].completed = !todoArray[index].completed;
      saveToLocalStorage(todoArray);
      renderTodos(); // Re-render to update UI
    });

    // Remove functionality
    removeBtn.addEventListener("click", function() {
      todoArray = todoArray.filter(todo => todo.todoName !== todos.todoName);
      saveToLocalStorage(todoArray);
      renderTodos();
    });
  });
}

// Event listener for adding/editing todo
Addbtn.addEventListener("click", function() {
  let text = inputbox.value.trim();

  if (editing && currentTodo) {
    // Update the todo
    todoArray[currentTodo.index].todoName = text;
    saveToLocalStorage(todoArray);
    
    // Reset editing state
    editing = false;
    Addbtn.textContent = "Add";
    inputbox.value = "";
    currentTodo = null;
    renderTodos();
  } else {
    if (text.length !== 0) {
      todoArray.push({ todoName: text, completed: false });
      saveToLocalStorage(todoArray);
      renderTodos();
    }
  }
});

// Function to save todos to localStorage
function saveToLocalStorage(todoArray) {
  localStorage.setItem("todolist", JSON.stringify(todoArray));
}

// Render todos on page load
document.addEventListener("DOMContentLoaded", renderTodos);