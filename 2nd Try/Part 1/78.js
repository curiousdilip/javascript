const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

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

console.log(user1.about());
console.log(user2.about());
