function hello() {
  console.log("Hello World");
}

// javascript function ===> function + object

console.log(hello.name); //tells function name

//  you can add your own properties
hello.myOwnProperty = "very unique value";

console.log(hello.myOwnProperty);

// name property --> tells function name

// function provide more usefull properties

// function hame denge free space (actual me free space jaise kuch ni hota free space mai empty object{} ko bol rha hun sirf smjhne ke liye appko)

console.log(hello.prototype); // {}

// only functions provide prototype property

const hello1 = "DIlip";

if (hello.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "disco dancer";
};

console.log(hello.prototype.sing());
