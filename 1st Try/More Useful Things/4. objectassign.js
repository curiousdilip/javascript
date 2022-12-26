// Clone using Object.assign

// memory -- > obj2,obj will point to same object in memory
const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = { ...obj };
const obj2 = Object.assign({}, obj); // learn more about object.assign in object oriented language(OOP) part of this video

obj.key3 = "value3";
console.log(obj);
console.log(obj2);
