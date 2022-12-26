// computed properties
const key1 = "obj1";
const key2 = "obj2";

const val1 = "value1";
const val2 = "value2";

const obj = {
  [key1]: val1, //computed properties
  [key2]: val2,
};
console.log(obj);

// other method

const obj2 = {};
obj2[key1] = val1;
obj2[key2] = val2;

console.log(obj2);
