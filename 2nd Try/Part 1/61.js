// find Method

const myArray = ["Hello", "Cat", "Dog", "Lion"];

function isLength3(string) {
  return string.length === 3;
}

console.log(myArray.find(isLength3));

const users = [
  {
    userId: 1,
    userName: "Dilip",
  },
  { userId: 2, userName: "Vishal" },
  { userId: 3, userName: "PAnkaj" },
  { userId: 4, userName: "Harsh" },
  { userId: 5, userName: "Raj" },
];

const myUser = users.find((user) => user.userId === 3);

console.log(myUser);
