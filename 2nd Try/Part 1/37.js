// Difference between dot and bracket notation(used when there is space in key)
const key = "email";
const person = {
  name: "Dilip",
  age: 23,
  "person hobbies": ["guitar", "sleeping", "music"],
};

console.log(person["person hobbies"]); //accessing key value pair having space in between
person[key] = "curiousdilip@gmail.com";
console.log(person);
