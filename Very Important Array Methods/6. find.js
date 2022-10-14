// find Method
// const myArray = ["hello", "cat", "dog", "lion"];

// function isLength3(string) {
//   return string.length === 3;
// }

// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

// const ans = isLength3("doggy");
// console.log(ans);

const users = [
  { userId: 1, userName: "Dilip", age: 23 },
  { userId: 2, userName: "Vishal", age: 20 },
  { userId: 3, userName: "Nitish", age: 21 },
  { userId: 4, userName: "Mahima", age: 14 },
];

const ans = users.find((user) => user.userId === 3);
console.log(ans);
