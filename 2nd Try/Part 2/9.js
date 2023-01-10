// lexical environment, scope chain

const lastName = "Kumar";

const printName = function () {
  const firstName = "Dilip";
  console.log(firstName);
  console.log(lastName);
};

printName();
