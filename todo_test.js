const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
const TODOS_KEY="todos";
let toDos=[];

function deleteTodos(event){
  const li=event.target.parentElement;
  li.remove();
  toDos=toDos.filter((toDo)=>toDo.id !==parseInt(li.id));
  saveTodos();
}

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodos(newTodo){
  const li=document.createElement("li");
  li.id=newTodo.id;
  const span=document.createElement("span");
  span.innerText=newTodo.text;
  const button=document.createElement("button");
  button.innerText("X");
  button.addEventListener("click",deleteTodos);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefalut();
  toDoInput.value="";
  const newTodo=toDoInput.value;
  const newTodoObj={
    text:newTodo,
    id:Date.now(), 
  };
  toDos.push(newTodoObj);
  paintTodos();
  savedTodos();
  
}

toDoForm.addEventListener("submit",handleTodoSubmit);
const savedTodos=localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
  const parsedTodos = JSON.parse(saveTodos);
  toDos=parsedTodos;
  parsedTodos.foreach(paintTodos);
}