const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 기능을 가진 함수
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 로그인 되었을 때, username value 값 표시
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 저장된 데이터값을 localStorage에 저장함.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // savedUsername 값이 null일 때
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // savedUsername 값이 있으면 paintGreetings 함수 호출
  paintGreetings(savedUsername);
}
