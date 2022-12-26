// functions
console.log("Happy Bday to you");
console.log("Happy Bday to you");
console.log("Happy Bday to you");

function birthdaysong() {
  console.log("Happy Bday to you");
}

birthdaysong();
birthdaysong();
birthdaysong();

function twoplusfour() {
  console.log(2 + 4);
}

twoplusfour();
// twoplusfour(); DRY Dont Repeat Yourself

function add(a, b) {
  // a, b are parameter
  return a + b;
}

const sum = add(23, 90);

console.log(sum);

// enven or odd

function isEven(number) {
  // if (number % 2 == 0) {
  //   return true;
  // }
  // return false;

  return number % 2 === 0;
}

console.log(isEven(3));

// function
// input - string ,output- first character

function firstChar(anyString) {
  return anyString[0];
}

console.log(firstChar("Dilip"));

// function ---> Array, target(number), output- index of targt if target present in array [1,5,27,6],9

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "not found";
}

console.log(
  findTarget([1, 2, 3, 4, 567, 6, 7, 8, 9, 456, 345, 35, 567, 567], 42)
);
