// function expression- giving function a different name using let or const and using only function keyword
const singHappyBday = function () {
  console.log("Happy Bday to you");
};

singHappyBday();

const sum = function (a, b) {
  // a, b are parameter
  return a + b;
};

console.log(sum(34, 2));

const oddeven = function (number) {
  return number % 2 === 0;
};

console.log(oddeven(34));

const firstchar = function (anyString) {
  return anyString[0];
};

console.log(firstchar("Dilip"));

const target = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "not found";
};

console.log(target([1, 2, 3, 4, 567, 6, 7, 8, 9, 456, 345, 35, 567, 567], 1));
