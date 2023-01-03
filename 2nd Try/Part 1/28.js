// Primitive and reference data types

// Primitive - takes less space in memory
let num1 = 7;
let num2 = num1;
console.log("value of num1", num1);
console.log("value of num2", num2);
num1++;
console.log("value of num1", num1);
console.log("value of num2", num2);

// Reference Types
// Array
let ar1 = ["item1", "item2"];
let ar2 = ar1;
console.log("value of array1", ar1);
console.log("value of array2", ar2);
ar1.push("item3");
console.log("value of array1", ar1);
console.log("value of array2", ar2);
