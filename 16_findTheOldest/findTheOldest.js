const findTheOldest = function (arr) {
  let d = new Date();
  let year = d.getFullYear();
  let arrWithAge = arr.map((obj) => {
    let age = obj.yearOfDeath
      ? obj.yearOfDeath - obj.yearOfBirth
      : year - obj.yearOfBirth;
    return {
      ...obj,
      age,
    };
  });

  let oldestAge = arrWithAge.reduce(
    (max, curr) => (curr.age > max ? (max = curr.age) : (max = max)),
    0
  );

  return arrWithAge.find((obj) => obj.age === oldestAge);
};

// Do not edit below this line
module.exports = findTheOldest;
