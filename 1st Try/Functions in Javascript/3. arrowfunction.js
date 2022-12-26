// arrow functions
// const singHappyBday = function sing() {
//   console.log("Happpy birthday to me!");
// };

const singHappyBday = () => {
  console.log("Happpy birthday to me!");
};

singHappyBday();

// const sum2number = function sum2no(a, b) {
//   return a + b;
// };

const sum2number = (a, b) => a + b; // if function contains single line then it can be written like this

console.log(sum2number(12, 3));

// const isEven = function oddeven(a) {
//   if (a % 2 === 0) {
//     console.log(`${a} is a Even Number `);
//   } else {
//     console.log(`${a} is a odd Number `);
//   }
// };

const isEven = (a) => {
  if (a % 2 === 0) {
    console.log(`${a} is a Even Number `);
  } else {
    console.log(`${a} is a odd Number `);
  }
};

isEven(12);

// const target = function target(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

const target = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
marray = [1, 2, 3, 4, 45, 56, 4];
const ans = target(marray, 56);
console.log(ans);
