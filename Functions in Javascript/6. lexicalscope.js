// Lexical Scope

//function check for the variable in the function itself, if value is not found in the function it searches in its parent function, it is not been found then it searches it inside the whole file
const myvar = "90";

const myApp = () => {
  //   const myvar = "90";
  //   const myFunc = () => {
  //     // const myvar = "45";
  //   console.log("hello from myfunc", myvar);
  //   };

  function myfunc2() {
    const myfunc3 = () => {
      console.log("hello from myfunc2", myvar);
    };
    myfunc3();
  }

  console.log(myvar);
  myfunc2();
};

myApp();
