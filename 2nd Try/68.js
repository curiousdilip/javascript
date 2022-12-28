// maps
// map is an iterables
// store data in ordered fashion
// store key value pair (like objects)
// duplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anythin as key

// like array, number, string

//object literals -> key=string or key=symbol
const person = {
  firstName: "Dilip",
  age: 23,
  1: "one",
};

console.log(person.firstName);
console.log(person.age);
console.log(person["1"]);

for (let key in person) {
  console.log(typeof key);
}

// map will store key value pair

const person1 = new Map();
person1.set("firstName", "Dilip");
person1.set("age", 7);
person1.set(1, "one");
person1.set([1, 2, 3, 4], "one ,two,three,four");
console.log(person1);
for (let key of person1.keys()) {
  console.log(key, typeof key);
}

for (let key of person1) {
  console.log(key);
}

const person2 = new Map([
  ["firstName", "Dilip"],
  ["age", 23],
]);
console.log(person2);

const person3 = {
  id: 1,
  firstName: "Dilip",
};

const userInfo = new Map();
userInfo.set(person3, { age: 8, gender: "male" });

console.log(userInfo);
console.log(person3.id);
console.log(userInfo.get(person3).gender);
