// how to clone array

let ar1 = ["item1", "item2"];
// let ar2 = ar1;

let ar2 = ar1.slice(0); //faster method

ar1.push("item3");

console.log(ar1 === ar2);
console.log(ar1);
console.log(ar2);

// how to concatenate two arrays
let ar3 = [].concat(ar1);
console.log(ar3);

// new way -- spread operator (mostly used)

let ar4 = [...ar1];

console.log(ar4);
