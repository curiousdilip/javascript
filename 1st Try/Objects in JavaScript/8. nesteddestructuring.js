const users = [
  { userId: 1, firstName: "dilip", gender: "male" },
  { userId: 2, firstName: "Vishal", gender: "male" },
  { userId: 3, firstName: "Mahima", gender: "female" },
];

const [{ firstName: name, gender }, , { userId }] = users;
console.log(name, gender);
console.log(userId);
