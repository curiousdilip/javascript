// arrow functions
const singHappyBday = function () {
  //function expression
  console.log("Happy Bday to you");
};

const singHappyBdayq = () => {
  //arrow function
  console.log("Happy Bday to you");
};

singHappyBdayq();

const sum = (a, b) => {
  // a, b are parameter
  return a + b;
};

console.log(sum(34, 2));

const oddeven = (number) => number % 2 === 0;

console.log(oddeven(34));

const firstchar = (
  anyString //paranthesis can be removed if using one argument
) => {
  return anyString[0];
};

console.log(firstchar("Dilip"));

const target = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "not found";
};

console.log(target([1, 2, 3, 4, 567, 6, 7, 8, 9, 456, 345, 35, 567, 567], 6));
