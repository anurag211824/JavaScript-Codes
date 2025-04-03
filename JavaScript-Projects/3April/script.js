const inputbox = document.querySelector(".input-text");
const Addbtn = document.querySelector("button");
const todolist = document.querySelector("ul");

let todoArray = JSON.parse(localStorage.getItem("todolist")) || [];
let complete = false;
let editing = false;
let currentTodo = null;

// Function to render todos from localStorage
function renderTodos() {
  todolist.innerHTML = "";
  todoArray.forEach(text => {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
      <div class="todo-style"> <li class="todoo">${text}</li> </div>
      <div class="buttons">
        <button class="completeTodo">Complete</button>
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
    editBtn.addEventListener("click", function () {
      inputbox.value = todotextContainer.textContent;
      Addbtn.textContent = "Edit";
      editing = true;
      currentTodo = todotextContainer;
    });

    // Complete functionality
    completeBtn.addEventListener("click", function () {
      todotextContainer.classList.toggle("todo-text");
      complete = true;
    });

    // Remove functionality
    removeBtn.addEventListener("click", function () {
      let todoText = todotextContainer.textContent;
      deleteLocalTodo(todoText);
      renderTodos();
    });
  });
}

// Event listener for adding/editing todo
Addbtn.addEventListener("click", function () {
  let text = inputbox.value.trim();

  if (editing && currentTodo) {
    let prevTodoText = currentTodo.textContent;
    let newTodotext = text;
    currentTodo.textContent = text;

    if (complete) {
      currentTodo.classList.toggle("todo-text");
      complete = false;
    }

    editing = false;
    Addbtn.textContent = "Add";
    inputbox.value = "";
    currentTodo = null;
    editTodoLocalStorage(newTodotext, prevTodoText);
  } else {
    if (text.length !== 0) {
      todoArray.push(text);
      saveToLocalStorage(todoArray);
      renderTodos();
    }
  }
});

// Function to save todos to localStorage
function saveToLocalStorage(todoArray) {
  localStorage.setItem("todolist", JSON.stringify(todoArray));
}

// Function to edit a todo in localStorage
function editTodoLocalStorage(newTodotext, prevTodoText) {
  let storedTodoArray = JSON.parse(localStorage.getItem("todolist")) || [];
  let editIndex = storedTodoArray.findIndex(todo => todo === prevTodoText);
  if (editIndex !== -1) {
    storedTodoArray[editIndex] = newTodotext;
  }
  saveToLocalStorage(storedTodoArray);
}

// Function to delete a todo from localStorage
function deleteLocalTodo(todoText) {
  todoArray = todoArray.filter(todo => todo !== todoText);
  saveToLocalStorage(todoArray);
}

// Render todos on page load
document.addEventListener("DOMContentLoaded",renderTodos)
