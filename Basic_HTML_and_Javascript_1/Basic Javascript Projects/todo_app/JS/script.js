//JavaScript (in script.js file)
let todoInput = document.getElementById('todo-input');
let addTodoBtn = document.getElementById('add-todo-btn');
let todoList = document.getElementById('todo-list');

let todos = [];

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
  let todoText = todoInput.value.trim();
  if (todoText) {
    let todo = {
      text: todoText,
      completed: false
    };
    todos.push(todo);
    renderTodoList();
    todoInput.value = '';
  }
}

function renderTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    if (todo.completed) {
      todoItem.classList.add('completed');
    }

 todoItem.inner
todoList.appendChild(todoItem);

let completeBtn = todoItem.querySelector('.complete-btn');
completeBtn.addEventListener('click', () => {
  todo.completed = !todo.completed;
  renderTodoList();
});

let deleteBtn = todoItem.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
  todos.splice(index, 1);
  renderTodoList();
});
});
}

