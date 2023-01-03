// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "the first noel";
//   },
// };
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); //we create __proto__
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "the first noel";
};
const user1 = createUser(
  "Dilip",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user2 = createUser(
  "Vishal",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user3 = createUser(
  "Abhishek",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user4 = createUser(
  "Noel",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);

console.log(user1);
console.log(user1.about());
console.log(user1.sing());
console.log(user1.is18());
