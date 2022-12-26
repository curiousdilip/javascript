// nested destructuring
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

const [user1, user2, user3] = users;
console.log(user1.Name, user2.gender);

const [{ Name }, , { gender }] = users;
console.log(Name, gender);

const [{ Name: user1Name, userId }, , { gender: user3Gender }] = users;
console.log(userId);
console.log(user1Name, user3Gender);
