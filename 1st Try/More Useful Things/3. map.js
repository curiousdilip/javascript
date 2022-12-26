// Maps
// map is an iterabke

// store data in ordered fashion

// store key value pair ( like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, nuymber, string

// object literal
// key->string
// key->symbol
// const person = {
//   firstName: "dilip",
//   age: 23,
//   1: "one",
// };

// console.log(person.firstName);
// console.log(person.age);

// for (let key in person["1"]) {
//   console.log(typeof key);
// }

// key value pairs
// const person = new Map();
// person.set("firstName", "Dilip");
// person.set("age", "23");
// person.set(1, "one");
// person.set([1, 2, 3], "onetwothree");
// person.set({ 1: "one" }, "onetwothree");
// console.log(person);
// console.log(person.get(1));

// for (let key of person.keys()) {
//   console.log(key, "=>", typeof key);
// }

// for (let [key, value] of person) {
//   console.log(Array.isArray(key));
//   console.log(key, value);
// }

const person = new Map([
  ["firstName", "Dilip"],
  ["age", "23"],
]);
console.log(person);

const person1 = {
  id: 1,
  firstName: "Rahul",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1));
