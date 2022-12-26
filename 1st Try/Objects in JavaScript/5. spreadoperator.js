// spread operator

// const array1 = [1, 2, 3, 4]; --- SPREAD OPERTOR IN ARRAY
// const array2 = [5, 6, 7, 8];

// // const newArray = [...array1, ...array2, 9, 10];
// const newArray = [..."DILIP"];
// console.log(newArray);

// SPREAD OPERATOR IN OBJECTS

const obj = {
  key1: "value1",
  key2: "value2",
};
// console.log(obj);

const obj2 = {
  key1: "lolvalue",

  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj, ...obj2 };
// const newObject = { ...obj2, ...obj, key5: "hello world" };
// const newObject = { ..."Dilip" }; //convert string to object
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };

console.log(newObject);
