function hello() {
  console.log("hello world");
}
// hello();
hello.call();

// call apply bind
function about(hobby, musician) {
  console.log(this.firstName, this.age, hobby, musician);
}
const user1 = {
  firstName: "Dilip",
  age: 23,
  //   about: function (hobby, musician) {
  //     console.log(this.firstName, this.age, hobby, musician);
  //   },
};
const user2 = {
  firstName: "Vishal",
  age: 20,
};

// user1.about("violin", "Mozart");

// user1.about.call(user2, "guitar", "Mozart");

about.call(user1, "guitar", "honey singh");
about.call(user2, "pta", "nahi");

// apply
about.apply(user1, ["violin", "Bach"]);

// bind
const func = about.bind(user2, "guitar", "bach");
func();
