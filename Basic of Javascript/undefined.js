// undefined- if you have created a variable and havent assigned anything the it is undefined
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Dilip";
// console.log(typeof firstName, firstName);

// let variable = null;
// console.log(variable);

// console.log(typeof variable); // bug of js(typeof give null gives as object)

// BigInt came in 2020
// let number = 900719925474099154654;
// console.log(number);
// console.log(Number.MAX_SAFE_INTEGER);

let mynumber = BigInt(123);
let mNumber = 123n;
// console.log(mynumber);

console.log(mynumber + mNumber);
