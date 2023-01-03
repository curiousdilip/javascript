// getter and setters
class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = lastName;
  }

  get fullName() {
    //get keyword help to use method as property
    return `Your Fullname is ${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new person("Dilip", "Kumar", 23);
console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);
// person1.firstName = "Vishal"; //change name
// person1.lastName = "Singh";

person1.fullName = "Kumar Ramesh";
console.log(person1);

console.log(person1.firstName);
console.log(person1.lastName);
