// default parameters
// function add2(a, b) {
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }

function add2(a, b = 0) {
  return a + b;
}

console.log(add2(23, 67));
