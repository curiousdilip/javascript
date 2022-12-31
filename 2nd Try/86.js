// 2015 /es6
// class keyword
// classes are fake
class CreateUser1 {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "the first noel";
  }
}

const user8 = new CreateUser1(
  "Dilip",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user5 = new CreateUser1(
  "Vishal",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user6 = new CreateUser1(
  "Abhishek",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);
const user7 = new CreateUser1(
  "Noel",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);

console.log(user5.about());

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
