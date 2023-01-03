// arrow functions--> arrow function me this ni hota, ye this apke surrounding se leta hai
const user1 = {
  firstName: "Dilip",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

user1.about();
