// Map method
const numbers = [1, 2, 3, 4, 5];

const square = function (number) {
  return number * number;
};
const squareNumber = numbers.map(square);

console.log(squareNumber);
// map will create new array

const sqno = numbers.map(function (number) {
  return number * number;
});

console.log(sqno);

const users = [
  { firstName: "Dilip", age: 23 },
  { firstName: "Vishal", age: 20 },
  { firstName: "Pankaj", age: 23 },
  { firstName: "Sahil", age: 26 },
];

const usernames = users.map((user) => {
  return user.firstName;
});

console.log(usernames);
