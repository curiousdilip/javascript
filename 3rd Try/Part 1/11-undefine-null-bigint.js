// undefined
let firstName; //undefined variable where we don't assign a value to a variable
console.log(firstName)
console.log(typeof firstName)
console.log("-------------")

firstName = 34;
console.log(firstName)
console.log(typeof firstName)
console.log("-----============--------")

// null

let myVar = null
console.log(myVar) //null
console.log(typeof myVar) //object -> bug in javascript
console.log("-----============--------")

// bigint

let myNum = BigInt(123456)
// console.log(myNum)
// console.log(Number.MAX_SAFE_INTEGER)
console.log(typeof myNum)

console.log(myNum + 123n)
