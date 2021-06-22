const logInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick() {
  console.log(logInput.value);
}

loginButton.addEventListener("click", onLoginButtonClick);
