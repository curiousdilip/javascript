//  clone using object.assign
// heap memory

const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = obj;
// const obj2 = { ...obj }; //clone
const obj2 = Object.assign({}, obj);
// obj and ob2 will have the same address
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
