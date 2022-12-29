// methods
// function inside object

const person = {
  firstName: "Dilip",
  age: 23,
  about: personInfo,
};

const person1 = {
  firstName: "Vishal",
  age: 20,
  about: personInfo,
};

const person2 = {
  firstName: "Pankaj",
  age: 24,
  about: personInfo,
};

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

person.about();
person1.about();
person2.about();
