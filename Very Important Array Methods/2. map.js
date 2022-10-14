// Map Method

// const numbers = [2, 3, 4, 5, 6, 7];

// const square = function (number) {
//   return number * number;
// };

// const squareNumber = numbers.map((number, index) => {
//   return `index: ${index} ${number * number}`;
// });
// console.log(squareNumber);

const users = [
  { firstName: "Dilip", age: 23 },
  { firstName: "Vishal", age: 20 },
  { firstName: "Nitish", age: 21 },
  { firstName: "Mahima", age: 14 },
];

const userNames = users.map((user) => {
  return user.firstName;
});

console.log(userNames);
