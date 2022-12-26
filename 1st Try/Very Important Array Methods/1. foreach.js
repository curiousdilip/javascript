// important array methods

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function myFunc(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   myFunc(numbers[i], i);
// }

// numbers.forEach(function (number, index) {
//   console.log(`index is ${index} number is ${number}`);
// });

// anonymous function - function without name

// numbers.forEach(function (number) {
//   console.log(number * 3);
// });

const users = [
  { firstName: "Dilip", age: 23 },
  { firstName: "Vishal", age: 20 },
  { firstName: "Nitish", age: 21 },
  { firstName: "Mahima", age: 14 },
];

// users.forEach(function (user) {
//   console.log(user.firstName);
// });

// for (let user of users) {
//   console.log(user.age);
// }

users.forEach((user, index) => {
  console.log(user.firstName, index);
});
