// Rest Parameters

// function myFunc(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is`, c);
// }

// myFunc(23, 45, 76, 48, 56, 78);

// addAll(1, 2, 3, 4, 5, 6, 7);
const addAll = (...a) => {
  let t = 0;
  for (let b of a) {
    t = t + b;
  }
  return t;
};

console.log(addAll(2, 3, 4, 5, 6));

addAll();
