// block scope vs function scope

// let and const are block scope - if any variable is assigned in any block it will be accessible to that block only

// var is function scope

{
  let firstName = "Dilip";
  console.log(firstName);
}

{
  var firstName = "Dilip";
}

console.log(firstName);

if (true) {
  let firstName1 = "Dilip";
  console.log(firstName1);
}

console.log(firstName1);
