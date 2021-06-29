// Rest Parameter

// function add(x1, x2) {
//   return x1 + x2;
// }

// 파라미터에 몇 개가 들어와도 상관이 없다.
function add(...nums) {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));

// const num = [2, 5, 3, 7, 43, 21]
