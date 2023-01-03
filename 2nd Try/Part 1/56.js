// important array methods

// forEach
// map
// filter
// reduce

const numbers = [4, 2, 5, 8];

function multiplyBy2(number, index) {
  console.log(`index is ${index}`);
  console.log(`${number} * 2 = ${number * 2}`);
}

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);
// multiplyBy2(numbers[2], 2);
// multiplyBy2(numbers[3], 3);

// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

numbers.forEach(multiplyBy2);

numbers.forEach(function (number, index) {
  console.log(`${number}, ${number * 2} index is ${index}`);
});

const users = [
  { firstName: "Dilip", age: 23 },
  { firstName: "Vishal", age: 20 },
  { firstName: "Pankaj", age: 23 },
  { firstName: "Sahil", age: 26 },
];

users.forEach(function (user) {
  //for is older that for of
  console.log(user.firstName);
});

users.forEach((user) => {
  //arrow function
  console.log(user.firstName);
});
