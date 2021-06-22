const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

// function onLoginButtonClick() {
// const username = loginButton.value
// username 유효성 검사!!
// javascript만을 사용한다면 필수적인 과정이나 현재 login form을 활용할 예정
// html 안에서 유효성 검사하는 법이 있다.
// if (username === "") {
//   console.log("Please write your name");
// } else if (username.length > 15) {
//   alert("your name is too long.");
//}
// loginButton.addEventListener("click", onLoginButtonClick);
loginForm.addEventListener("submit", onLoginSubmit);
