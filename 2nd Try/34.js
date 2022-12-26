// for in loop in array gives index

const fruits = ["apple", "orange", "banana"];
const fruits2 = [];
for (let index in fruits) {
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
