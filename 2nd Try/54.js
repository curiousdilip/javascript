// Callback Functions
function myFunc(a) {
  console.log("hello World");
  console.log(a);
}

myFunc([1, 2, 3, 4]);

function myFunc1(name) {
  console.log("inside my func 1");
  console.log(`your name is ${name}`);
}

function myFunc2(callback) {
  console.log("hello ");
  callback("Dilip");
}

myFunc2(myFunc1);
