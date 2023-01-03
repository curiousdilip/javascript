// Array Destructuring - ES6 new feature
const myArray = ["value1", "value2", "value3"];
let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log("value of my var1", myvar1);
console.log("value of my var1", myvar2);

const [myvar3, , myvar4] = myArray;
const myNewArray = myArray.slice();
console.log("value of my var3", myvar3);
console.log("value of my var4", myvar4);
console.log(myNewArray);
