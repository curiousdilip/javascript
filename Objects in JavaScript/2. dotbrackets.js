// difference between dot and brakcet notation
const key = "email";
const person = {
  name: "dilip",
  age: 23,
  "person hobbies": ["violin", "music", "movies"],
};

console.log(person["person hobbies"]);
person[key] = "dkmrya02@gmail.com";

console.log(person);
