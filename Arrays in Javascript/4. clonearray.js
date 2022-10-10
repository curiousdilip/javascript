// how to clone array

// how to concatinate two array
// let array2 = array1.slice(0).concat(["item3", "item4"]);

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]); // it is fastest
// let array2 = [].concat(array1);
// let array2 = [].concat(array1, ["item3", "item4"]);

// New Way
let array3 = ["abc", "pqr", "acd"];
let array2 = [...array1, "item3", "item4", "item5", ...array3]; // ...spread operator

array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);
