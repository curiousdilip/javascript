// intro to arrays -- collection of elements, ordered collection of items,can store any types of datatypes
// reference type also know as objects

//how to create arrays

// let fruits = ["apple", "banana", "orange", "pineapple", "grapes"];
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(fruits[0], numbers);

let fruits = ["apple", "banana", "orange", "pineapple", "grapes"];
let obj = {}; //object literals

// fruits[1] = "seb";
// console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

console.log(typeof fruits);
console.log(typeof obj);

//array indexing

// higher order functions for an array
fruits.includes('orange') // true
fruits.filter(f => f.length === 6) // ['banana', 'orange', 'grapes']
fruits.map(f => f.charAt(0).toUpperCase()) // ["A", "B", "O", "P", "G"]
fruits.some(f => f.length > 6) // true
fruits.every(f => f.length > 6) // false
