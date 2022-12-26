// splice method
// start, delete,insert
const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItem = myArray.splice(1, 1);
// console.log(`deleted item ${deletedItem}`);

// insert
// myArray.splice(1, 0, "inserted item");
// console.log(myArray);

// insert and deleted
const deletedItem = myArray.splice(1, 2, "inserted item 1", "inserted item2");
console.log(myArray);
console.log(deletedItem);
