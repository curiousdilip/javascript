// difference between dot and bracket notation

const person = { age: 24, name: "Dilip", address: "E-13, Qutub vihar, ND-71", hobbies: ["guitar", "sleeping", "music"] }
//  how to access data from objects
console.log(person);
console.log(person["age"]);

//  how to add key data from objects
person["gender"] = "male"
console.log(person);

// Difference
const key = "email"

const person1 = { age: 24, name: "Dilip", address: "E-13, Qutub vihar, ND-71", "person hobbies": ["guitar", "sleeping", "music"] }

console.log(person1["person hobbies"])// bracket notation is used in this type of key/properties having space between theri names
person1[key] = "curiousdilip@gmail.com"//we can use value inside variable without using string in bracket

console.log(person1)
