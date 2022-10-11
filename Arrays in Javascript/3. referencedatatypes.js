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


// In other way the difference between let and const is misunderstood by const being immutable and let being used for mutable values.
// But the answer to difference between let and const is re-assinability. 
const studentName = 'abc';
studentName = 'def' // it will throw an error because const prohibits re-assigning value to a variable

const studentList = ['abc', 'def', 'ghi'];
studentList.push('jkl') // it will not throw an error as const allows mutation
studentList = ['abc', 'def'] // it will thrown an error due to studentList being reassigned a value.

// what if we don't want any mutation on the referenced data types like object.
// we can in that case use Object.seal() or Object.freeze()
