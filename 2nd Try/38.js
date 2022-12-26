// how to iterate object

const person = {
  name: "Dilip",
  age: 23,
  "person hobbies": ["guitar", "sleeping", "music"],
};

//   for in loop

for (let key in person) {
  console.log(person[key]);
  console.log(`${key} : ${person[key]}`);
  console.log(key, ":", person[key]);
}

// object.keys
console.log(Object.keys(person));
console.log(typeof Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
