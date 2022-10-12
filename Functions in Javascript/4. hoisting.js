// hoisting

// hello(); //calling it before declaring function -- it only works while declaring a function
// function hello() {
//   console.log("hello world");
// }

// hello();
// const print = function hello() {
//   // hoisting does not occur in function expression
//   console.log("hello world");
// };

// print();
// const print = () => {
//   // hoisting does not occur in arrow function
//   console.log("hello world");
// };
// console.log(hello); //gives undefined
// var hello = "hello world";
// console.log(hello); //hello

// console.log(hello); //error
// const hello = "hello world";
// console.log(hello);

console.log(hello); //error
let hello = "hello world";
console.log(hello);
