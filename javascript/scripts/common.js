/**
 * object userList의 age를 세대별로 구별하는 함수
 * @param {Object} users
 * @param {Array} keyAge
 * @returns
 */

function getAgeGroup(users, keyAge) {
  let userAgeGroup = {};

  for (const user of users) {
    let ageGroup = "";
    if (user[keyAge] > 10) {
      ageGroup = 0;
    } else if (user[keyAge] >= 100) {
      ageGroup = user[keyAge].toString().substr(0, 2) + "0";
    } else {
      ageGroup = user[keyAge].toString().charAt(0) + "0";
    }

    if (userAgeGroup.has(ageGroup)) {
      userAgeGroup.set(ageGroup, userAgeGroup.get(ageGroup) + 1);
    } else {
      userAgeGroup.set(ageGroup, 1);
    }
  }
  return userAgeGroup;
}

/**
 * 최소값과 최대값을 파라미터로 받고 그 사이 무작위 정수값을 반환하는 함수
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} min과 max 사이의 값
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
