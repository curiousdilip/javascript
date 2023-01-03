// undefined

let firstName;
console.log(typeof firstName)
firstName="Dilip"
console.log(typeof firstName, firstName)

// Null
let myVariable=null
console.log(typeof myVariable, myVariable)// shows as object type but it is a bug in javascript

myVariable="Dilip"

console.log(typeof myVariable, myVariable)


// BigInt

let myNumber=123;// number has its limit

console.log(myNumber)

console.log(Number.MAX_SAFE_INTEGER)

let myNumber1=BigInt(123); // change normal number to bigint number

let myNumber2=123n; 

console.log(myNumber1+myNumber2)
