// how to iterate object
const person = {
  name: "dilip",
  age: 23,
  "person hobbies": ["violin", "music", "movies"],
};

// for in loop
// Object.keys

// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
//   console.log(key, ":", person[key]);
// }

// console.log(Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
