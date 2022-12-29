const user1 = {
  firstName: "Dilip",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

user1.about();
// const myfunc = user1.about;
const myfunc = user1.about.bind(user1); //insted do this
myfunc();
