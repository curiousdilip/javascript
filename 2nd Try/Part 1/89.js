// super
class Animal {
  //super class
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

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modifed Eat : ${this.name} is eating`;
  }
  run() {
    return `${this.name} is runnning at ${this.speed}`;
  }
}
// object and instace are same
const Jacky = new Dog("jacky", 4, 3.56);
console.log(Jacky);
console.log(Jacky.run());
console.log(Jacky.eat());
