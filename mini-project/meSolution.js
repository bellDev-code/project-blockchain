let coin = 0;
document.getElementById("current").innerHTML = coin + "원";

// 동전 버튼 누르면 가격 나타나게하는 함수들
function click_btn1() {
  coin = coin + 1000;
  alert("1000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn2() {
  coin += 500;
  alert("500원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn3() {
  coin += 100;
  alert("100원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// 음료 리스트 버튼 누르면 구매할 수 있게 하는 함수들
function click_coke() {
  if (coin < 700) {
    alert("돈이 부족합니다");
  } else {
    coin -= 700;
    alert("코카콜라 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_orange() {
  if (coin < 1200) {
    alert("돈이 부족합니다");
  } else {
    coin -= 1200;
    alert("오렌지주스를 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_coffee() {
  if (coin < 500) {
    alert("돈이 부족합니다");
  } else {
    coin -= 500;
    alert("커피를 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_water() {
  if (coin < 700) {
    alert("돈이 부족합니다.");
  } else {
    coin -= 700;
    alert("물을 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_bori() {
  if (coin < 1200) {
    alert("돈이 부족합니다.");
  } else {
    coin -= 1200;
    alert("보리차를 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_pocari() {
  if (coin < 1000) {
    alert("돈이 부족합니다.");
  } else {
    coin -= 1000;
    alert("포카리를 뽑음");
    document.getElementById("current").innerHTML = coin + "원";
  }
}

// 지갑에 있는 돈
function walletMoney1() {
  walletMoney = walletMoney - 1000;
  document.getElementById("wallet").innerHTML = walletMoney + "원";
}

// 동전 addEventListener 부분
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

// 음료수 addEventListener 부분
const coke = document.getElementById("coke");
coke.addEventListener("click", click_coke);

const orange = document.getElementById("orange");
orange.addEventListener("click", click_orange);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);

const bori = document.getElementById("bori");
bori.addEventListener("click", click_bori);

const pocari = document.getElementById("pocari");
pocari.addEventListener("click", click_pocari);
