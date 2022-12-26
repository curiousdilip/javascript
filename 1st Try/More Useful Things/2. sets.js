// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicate allowed)

// const numbers = new Set([1, 2, 3, 3]);
// console.log(numbers);
// console.log(numbers[2]);

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(["item1", "item2", "item3"]);
// numbers.add(["item1", "item2", "item3"]);
// if (numbers.has(1)) {
//   console.log("1 is present");
// } else {
//   console.log("1 is not present");
// }

// for (let item of numbers) {
//   console.log(numbers);
// }
// console.log(numbers);

const myArray = [1, 2, 3, 4, 4, 4, 5, 6, 7, 4];
const uniqueElements = new Set(myArray);
console.log(myArray);
console.log(uniqueElements);
let length = 0;

for (let element of uniqueElements) {
  length++;
}
console.log(length);
