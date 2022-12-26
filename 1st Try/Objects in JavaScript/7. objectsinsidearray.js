// objects inside array
// very usefull in real world application

const users = [
  { userId: 1, firstName: "dilip", gender: "male" },
  { userId: 2, firstName: "Vishal", gender: "male" },
  { userId: 3, firstName: "Mahima", gender: "female" },
];

// console.log(users);

for (let user of users) {
  console.log(user.firstName);
}
