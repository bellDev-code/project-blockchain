const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// const toDos = []; // 시작할 때 항상 비어져있다.
// localStorate에서 발견되는 이전의 toDo들로 하고 싶음
let toDos = [];

// toDos를 단지 localStorage에다가 넣어주는 역할
function saveToDos() {
  // JSON.stringify() 문자열로 만들어준다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// parentElement는 클릭된 element의 부모다.
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 새로고침 누르면 지워지는 단점. => 해결책 : locarStorage
// todolist add function
function paintToDo(newTodo) {
  // console.log("I will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "👎";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// todolist value 값 submit 되면 toDoInput에 적힌 value 값을 가진다.
// submit 되면, saveToDos 함수 호출한다.
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // toDos = []에다가 push(newTodo) 한다.
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

// toDoForm 이벤트를 추가한 부분
toDoForm.addEventListener("submit", handleToDoSubmit);

// savedToDos는 localStorage에서 가져오는 "["1", "2", "3"]" string 형태이다.
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos) {
  // string 형태를 JSON.parse를 사용하여 자바스크립트에서 쓸 수 있는 array로 만든다.
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos); // ["1", "2", "3"]
  toDos = parsedToDos;
  // 각각의 item에다가 console.log()한다.
  parsedToDos.forEach(paintToDo);
}
