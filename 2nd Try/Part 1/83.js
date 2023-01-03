// new keyword\
// 1. this ={}--> empty objects
// 2. reutn {}

// __proto__
// official ecmascript document
// [[prototype]]

// constructor function because it is creating an object for us
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "the first noel";
};
const user1 = new CreateUser(
  "Dilip",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user2 = new CreateUser(
  "Vishal",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user3 = new CreateUser(
  "Abhishek",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user4 = new CreateUser(
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
console.log(user2);
