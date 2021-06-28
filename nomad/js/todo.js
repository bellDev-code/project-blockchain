const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// parentElement는 클릭된 element의 부모다.
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 새로고침 누르면 지워지는 단점.
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
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

// toDoForm 이벤트를 추가한 부분
toDoForm.addEventListener("submit", handleToDoSubmit);
