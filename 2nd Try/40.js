//  Spread Operator

// in array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newarr = [...arr1, ...arr2, 7, 8, 9];
const newarr1 = [..."DILIP KUMAR MAURYA"];

console.log(newarr);
console.log(newarr1);

// spread operator in objects

const obj = {
  key1: "value1",
  key2: "value2",
  //   key1: "kjsfjksd", //last one will be repeated
};

const obj2 = {
  key1: "hello", //last key will be there
  key3: "value3",
  key4: "value4",
};

const newobj = { ...obj, ...obj2, key5: "value5" };
console.log(newobj);

const newObje = { ..."abcdefghijklmnopqrstuvwxyz" };

console.log(newObje);
