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

for (let key in user1) {
  //   console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
