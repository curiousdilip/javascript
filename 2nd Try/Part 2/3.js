console.log(this);
console.log(window);
console.assert(myFunction);
console.log(fullName);

function myFunction() {
  console.log("this is my function");
}

var firstName = "Dilip";
var lastName = "Kumar";
var fullName = firstName + " " + lastName;
console.log(fullName);
