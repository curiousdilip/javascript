const user1 = {
  firstName: "Dilip",
  age: 23,
  about: function () {
    console.log(this.firstName, this.age);
  },
};
// user1.about();
// don't do this mistake

// const myFunc = user1.about;// dont use this instead use
const myFunc = user1.about.bind(user1); // use this

myFunc();
