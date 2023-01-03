let numbers = [1, 2, 3];
// prototype
// prototype===functions
console.log(numbers);

let numberss = new Array(1, 2, 3);
console.log(Array.prototype); //gives array

let numbers1 = [1, 2, 3];
console.log(Object.getPrototypeOf(numbers1));
console.log(numbers1);

function hello() {
  console.log("hello");
}

// prototype
console.log(hello.prototype); // gives object

hello.prototype = [];

//no use
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);
// no use
