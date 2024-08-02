let todoList = [];
  function addTodo() {
    let todoNameElement = document.querySelector(".todo-name");
    let todoName = todoNameElement.value;
    let todoDateElement = document.querySelector(".todo-date");
    let todoDate = todoDateElement.value;
    if(todoDate!='' && todoName!=''){
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
          <button class="delete-button" onclick="
            todoList.splice(${i},1);
            renderTodoList();
          ">Delete</button>
      `;
      todoListHTML += html;
    }
    document.querySelector(".todo-container").innerHTML = todoListHTML;
  }
  