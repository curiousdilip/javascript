// object inside array
// very useful in real world applications
const users = [
  {
    userId: 1,
    Name: "Dilip",
    gender: "male",
  },
  { userId: 2, Name: "Vishal", gender: "male" },
  {
    userId: 3,
    Name: "Pankaj",
    gender: "male",
  },
];

for (let user of users) {
  console.log(user.Name);
}

console.log(users);
