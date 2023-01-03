class animal {
  // parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const animal1 = new animal("Tomy", 1);
console.log(animal1);
console.log(animal1.isSuperCute());
console.log(animal1.isCute());
console.log(animal1.eat());

class Dog extends animal {} //subclass or derived class

const dog1 = new Dog("Jacky", 1);
console.log(dog1);
console.log(dog1.isSuperCute());
console.log(dog1.isCute());
console.log(dog1.eat());
