// function hello() {
//   console.log("Hello World");
// }

// hello.call();

// call------------------------

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "Dilip",
  age: 23,
};

const user2 = {
  firstName: "Vishal",
  age: 21,
};

about.call(user1, "Violin", "arjit singh");

// apply ---------------------

about.apply(user2, ["Violin", "arjit singh"]);

// bind ---------------------

const func = about.bind(user2, "Violin", "arjit singh");
func();
