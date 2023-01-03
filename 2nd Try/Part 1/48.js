// funciton inside function

const app = () => {
  const myFunc = () => {
    console.log("Hello from myfunc");
  };

  myFunc();

  const addtwo = (num1, num2) => {
    return num1 + num2;
  };

  console.log(addtwo(23, 45));

  const mult = (num1, num2) => {
    return num1 * num2;
  };

  console.log(mult(23, 45));

  console.log("inside app");
};

app();
