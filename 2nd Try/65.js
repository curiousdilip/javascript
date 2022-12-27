//  Splice Method

// start delete, insert

// delete or insert inside an array

const myArray = ["item1", "item2", "item3"];

// delete
// console.log(myArray.splice(1, 2));
// we can store deleted item
// const deletedItem = myArray.splice(1, 1);
// console.log("Deleted Item", deletedItem);

// insert
// myArray.splice(4, 0, "item4");

// delete insert
myArray.splice(1, 2, "item4", "item5");

console.log(myArray);
