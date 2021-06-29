function getScores() {
  return [70, 21, 100, 50, 12, 33, 45];
}

const [x, y, ...args] = getScores();
// scores[0];
// scores[1];
// scores[2];

// const [x, y, z] = getScores();
// console.log(x);
// console.log(y);
// console.log(z);

// console.log(args);

function getCoordinates() {
  return [12.222, 34.2323];
}

// [경도, 위도];
// const coodinates = getCoordinates();
// coodinates[0]; // 경도
// coodinates[1]; // 위도

// const [longititue, latitude] = getCoordinates(); // [경도, 위도]

function getPerson() {
  return ["John", "Doe", ["Red", "Green", "Blue"]];
}

const [firstName, lastName, favoriteColor] = getPerson();

// const [firstName, lastName, [color1, color2, color3]] = getPerson();
