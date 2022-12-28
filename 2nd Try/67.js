// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicate allowed)

const numbers = new Set([1, 2, 3, 4]);
const string = new Set("abcd");

console.log(numbers);
console.log(string);

const numbers1 = new Set();
numbers1.add(1);
numbers1.add(2);
numbers1.add(3);
numbers1.add(4);
numbers1.add(5);
numbers1.add(6);
numbers1.add(7);
numbers1.add(["Items1", "item2"]); // same array can be added as theri adress are different
numbers1.add(["Items1", "items2"]);
console.log(numbers1);

if (numbers1.has(1)) {
  console.log("one is Presnt");
} else {
  console.log("one is not Presnt");
}
for (let number of numbers1) {
  console.log(number);
}

const myArray = [1, 2, 3, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray);
let length = 0;
for (let element of uniqueElements) {
  length++;
}

console.log(length);
