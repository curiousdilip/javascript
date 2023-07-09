// array destructuring

const array1 = ["value1", "value2", "value3", "value4"]

// let myvar1 = array1[0]
// let myvar2 = array1[1]

// console.log(myvar1, myvar2)

let [myvar1, , myvar2, ...array2] = array1

// let array2 = array1.slice(2);

console.log(myvar1, myvar2)
console.log(array2)
