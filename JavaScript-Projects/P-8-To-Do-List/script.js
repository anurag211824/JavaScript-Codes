let todoList = [];
document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  let todoNameElement = document.querySelector(".todo-name");
  let todoName = todoNameElement.value;
  let todoDateElement = document.querySelector(".todo-date");
  let todoDate = todoDateElement.value;
  if (todoDate != "" && todoName != "") {
    todoList.push({ todoName, todoDate });
    console.log(todoList);
    todoNameElement.value = "";
    todoDateElement.value = "";
    renderTodoList();
  }
}

function renderTodoList() {
  let todoListHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.todoName;
    const dueDate = todoObject.todoDate;
    const html = `
          <div class="name">${name}</div>
          <div class="date">${dueDate}</div>
          <button class="delete-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector(".todo-container").innerHTML = todoListHTML;
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice($(index), 1);
        renderTodoList();
      });
    });
}
