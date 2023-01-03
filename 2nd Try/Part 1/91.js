// static methods and properties
class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = lastName;
  }
  static classInfo() {
    return "this is a person class";
  }

  static desc = "static Property";
  get fullName() {
    return `Your Fullname is ${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return `${this.firstName} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const person1 = new person("Dilip", "Kumar", 23);
console.log(person1.eat());

console.log(person.classInfo());
console.log(person.desc);
