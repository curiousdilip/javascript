const user1 = {
  firstName: "Dilip",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
}; //traditional way

const user2 = {
  firstName: "Dilip",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
}; //short syntax

user2.about();
