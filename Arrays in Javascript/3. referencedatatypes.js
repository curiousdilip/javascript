// primitive & reference data types

// primitive Types
// let num1 = 7;
// let num2 = num1;
// console.log(`value of num1 is ${num1}`);
// console.log(`value of num2 is ${num2}`);

// num1++;
// console.log(`value of num1 is ${num1}`);

// console.log(`value of num2 is ${num2}`);

// reference types
// array

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(`array1 ${array1}`);
console.log(`array2 ${array2}`);
array1.push("item3");
// ------------------------------
console.log(`after adding item3`);

console.log(`array1 ${array1}`);
console.log(`array2 ${array2}`);

// Primitive type
// primitive datatypes are stored in stack, if the value of the num1 is changed the value of num2 will remains the same
// let num1 =4
// let num2= num1

// Reference type
// reference type is stored in heap ,num2 stored the address of num1, hence num1 value = num2 value
// let num1 =4
// let num2= num1
