// iterables
// jispe hum for of loop laga sakein
// string, array are iterable

const firstName = "Dilip";

for (let char of firstName) {
  console.log(char);
}

const items = ["item1", "item2", "item3", "item4"];
for (let item of items) {
  console.log(item);
}

const users = { key1: "value", key2: "value2" }; // object are not iterables

// array like object
// jinke pas length property hoti hai
// aur jiko hum index se access kar skte hai
// example - string

const firstName1 = "Dilip";
console.log(firstName1.length);
console.log(firstName1[3]);
