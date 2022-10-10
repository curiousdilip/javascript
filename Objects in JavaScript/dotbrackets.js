// difference between dot and brakcet notation

const person = {
  name: "dilip",
  age: 23,
  hobbies: ["violin", "music", "movies"],
};

console.log(person);

// how to access data from objects
console.log(person["name"]);
console.log(person.age);

// how to add key value pairs to objects
person["gender"] = "male";
console.log(person);
