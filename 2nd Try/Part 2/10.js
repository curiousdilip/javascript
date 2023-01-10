// closures
// closure - 30%-40%
// analyse- 70%-80%
// real example - 100%

// function can return functions

function myFunc() {
  return 1;
}

const ans = myFunc();

console.log(ans);

function outerFunction() {
  function innerFunction() {
    console.log("Hello World");
  }

  return innerFunction;
}

console.log(outerFunction());
