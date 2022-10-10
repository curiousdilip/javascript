// objects are reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects do'nt have index

// how to create objects

// const person = { name: "Dilip", age: "23", gender: "male" }; //also known as object literals
const person = {
  name: "dilip",
  age: 23,
  hobbies: ["violin", "music", "movies"],
};

console.log(person);

// how to access data from objects
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// how to add key value pairs to objects
person.gender = "male";
console.log(person);
