const obj1 = {
  key1: "value1",
  key2: "value2",
};

// official exmascript documentation
// [[prototype]]

// prototype
const obj2 = Object.create(obj1);
// there is one more to create empty obejct
obj2.key2 = "value3";

console.log(obj2.__proto__); // able to access the obj
console.log(obj2);
// this is happening
