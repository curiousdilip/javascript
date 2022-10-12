// Para Destructuring

// object
// react

const person = {
  firstName: "Dilip",
  lastName: "Kumar",
};

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.lastName);
//   console.log(obj.age);
// }

function printDetails({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
}

printDetails(person);
