// intro to arrays
// reference type
// how to create arrays

// array is reference and is a type of object

// array- ordered collection of elements of items/elements
let fruits = ["apple", "Orange", "grapes"]; //object

let obj = {}; //object literals
console.log(fruits[1]);
let numbers = [1, 2, 3, 4];
console.log(numbers);
let mix = [1, 2, 3, "hello", null, undefined];
console.log(mix);

fruits[3] = "Papaya";
fruits[1] = "banana";

console.log(typeof fruits);
console.log(fruits);
console.log(Array.isArray(fruits)); // to check a collection is array or not
console.log(Array.isArray(obj));
