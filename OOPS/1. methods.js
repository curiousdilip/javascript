// Methods --> Function inside object

// const person = {
//   firstName: "Dilip",
//   age: 23,
//   about: function () {
//     console.log(`Person name is ${this.firstName} and his age is ${this.age}`); //this is a object that is calling the function
//   },
// };
// when we write 'this' we dont know the the value of 'this' we get to know it during the run time

function personInfo() {
  console.log(`Person name is ${this.firstName} and his age is ${this.age}`);
}

const person1 = {
  firstName: "Dilip",
  age: 23,
  about: personInfo,
};

const person2 = {
  firstName: "Harsh",
  age: 15,
  about: personInfo,
};
const person3 = {
  firstName: "Vishal",
  age: 20,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
