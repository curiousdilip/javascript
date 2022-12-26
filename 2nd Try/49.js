//  lexical Scope
const myVar = "value1";
function myApp() {
  function myFunc() {
    const myVar = "value2";

    const myfunc2 = function () {
      console.log("inside myfunc", myVar);
    };
    myfunc2();
  }

  const myfunc3 = () => {};
  console.log(myVar);
  myFunc();
}
myApp();
