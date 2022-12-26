//  papam destructuring

// object
// react

const person = {
  firstName: "Dilip",
  gender: "male",
  age: 23,
};

function printDetails(obj) {
  console.log(obj.firstName);
  console.log(obj.gender);
}

printDetails(person);

function printDetails1({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}

printDetails1(person);
