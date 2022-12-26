const user1 = {
  firstName: "Dilip",
  age: 23,
  about: () => {
    console.log(this.firstName, this.age); //arrow function me "this" ni hota
  },
};
user1.about();
