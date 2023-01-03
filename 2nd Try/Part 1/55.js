// Function returning functions
function myFunc() {
  return "a";
}

console.log(myFunc());

function myFunc1() {
  return [1, 2, 3, 4];
}

console.log(myFunc1());

function myFunc2() {
  return { name: "Dilip", age: 23, gender: "male" };
}

console.log(myFunc2());

function myFunc3() {
  function hello() {
    return "Hello World";
  }
  return hello;
}

console.log(myFunc3());
