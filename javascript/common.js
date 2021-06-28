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

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
