const user = {
  firstName: "Dilip",
  lastName: "Kumar",
  email: "dkmrya02@gmail.com",
  age: 23,
  address: "house number,colony,pincode,state",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const aboutUser = user.about();
console.log(aboutUser);

// function (that function create object)
// add key value pair
// object ka return krega
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser(
  "Dilip",
  "kumar",
  "dkmrya02@gnail.com",
  23,
  "hhajsd, colony, india"
);

console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);
