//  rest Parameters --

function myfunc(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

myfunc(23, 34, 56, 34, 54, 65, 3);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

console.log(addAll(1, 2, 3, 4, 5, 6));
