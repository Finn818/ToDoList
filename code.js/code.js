const text = document.getElementById("text");
const addTask = document.getElementById("add-task-btn");
const saveTask = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

addTask.addEventListener("click", (e) => {
 e.preventDefault();
 let todo = localStorage.getItem("todo");
 if (todo === null) {
   todoArray = [];
 } else {
   todoArray = JSON.parse(todo);
 }
 todoArray.push(text.value);
 text.value = "";
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `
    <p class='w-full text-grey-darkest'>${list}</p>
    <button onclick='deleteTodo(${ind})'  text-white bg-red-500'>Delete</button>
    <button onclick ='editTodo(${ind})' text-white bg-red-500'>Edit</button>
 </div>`;
  });
  listBox.innerHTML = htmlCode;
 }

 function deleteTodo(ind) {
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem('todo', JSON.stringify(todoArray));
  displayTodo();
 }

 function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse('todo');
  text.value = todoArray[ind];
  addTask.style.display = 'none';
  saveTask.style.display = 'block';
 }

saveTask.addEventListener('click', () => {
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTask.style.display = 'block';
  saveTask.style.display = 'none';
  text.value = '';
  localStorage.getItem('todo', JSON.stringify(todoArray));
  displayTodo();
})