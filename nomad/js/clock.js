const clock = document.querySelector("#clock");

// 현재 시간을 표시하는 getClock 함수.
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval 함수를 호출하여 1초마다 변화되는 값 설정
setInterval(getClock, 1000);
