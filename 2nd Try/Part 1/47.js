// Hoisting
hello23(); // possible only in function declaration

function hello23() {
  console.log("Hello World");
}

//helloji(); //cannot be done in function expression
const helloji = function () {
  console.log("hello ji");
};

console.log(hello);

var hello = "hello world";
console.log(hello);
