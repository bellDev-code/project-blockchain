// 함수 선언식

function add() {}

// 함수 표현식
const add = function (x1, x2) {
  return x1 + x2;
};

// Arrow Function - 화살표 함수

// const add = (x1, x2) => {
//   return x1 + x2;
// };

const add = (x1, x2) => x1 + x2;

const add2 = function (x1, x2) {
  const sum = x1 + x2;
  return sum;
};

const add2 = (x1, x2) => {
  const sum = x1 + x2;
  return sum;
};

function say(message) {
  console.log(message);
}

const say = (message) => {};
