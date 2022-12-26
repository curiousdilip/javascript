//block scope vs function scope

// let and const are block scope
// var is function scope

// {
//   // this is a block
// }

// {
//   const firstName = "dilip"; // variable/constant is created inside a block then it can't be accessed from outside the blockscope
//   console.log(firstName);
// }
// // console.log(firstName);
// {
//   let firstName = "Kumar";
//   console.log(firstName);
// }

// const firstName = "mahima"; // global block
// console.log(firstName);

// {
//   var firstName = "dilip";
//   console.log(firstName);
// }

// console.log(firstName); // main file of javascript is function scope

// if (true) {
//   var firstName = "dilip";
//   console.log(firstName);
// }

// console.log(firstName);

function myApp() {
  if (true) {
    let firstName = "dilip";
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();
