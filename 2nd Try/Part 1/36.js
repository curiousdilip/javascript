// objects are reference type
// arrays are good but sufficient for real world data
// objects store key value pairs
// object don't have index

// how to create objects

const person = { name: "Dilip", age: 23, email: "curiousdilip@gmail.com" };
console.log(person);
console.log(typeof person);

// how to access data from objects
console.log(person.age);
console.log(person.name);
console.log(person.email);

const person2 = {
  name: "vishal",
  age: 22,
  hobbies: ["Guitar", "online Games"],
};

console.log(person2.hobbies);
// how to add key value pairs to obejcts
person.gender = "male";
console.log(person);
