// default parameters

function addTwo(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  return a + b;
}

function multiply(a, b = 0) {
  return a * b;
}

console.log(addTwo(34, 1092));

console.log(multiply(34, 234234));
