// functions inside function

const app = () => {
  const myFunc = () => {
    console.log("hello from myfunc");
  };

  myFunc();
  const add2 = (a, b) => a + b;
  console.log(add2(23, 45));

  const multiply2 = (a, b) => a * b;
  console.log(multiply2(2, 45));

  console.log("inside app");
};

app();
