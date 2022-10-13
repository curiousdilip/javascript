// function returning function

// function myfunc() {
//   return { name: "dilip" };
// }

// function myfunc() {
//   return [1, 2, 3, 4, 5];
// }

// function myfunc() {
//   return "a";
// }

// function that return function is know as higher order function
function myfunc() {
  function hello() {
    // console.log("hello world");
    return " hello world";
  }
  return hello;
}
const ans = myfunc();
console.log(ans());
