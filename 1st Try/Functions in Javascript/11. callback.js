// Callback Functions

function newfunc(name) {
  console.log("inside new func");
  console.log(` your name is ${name}`);
}

function myfunc(a) {
  console.log("inside my function");
  a("Dilip");
}

myfunc(newfunc);
