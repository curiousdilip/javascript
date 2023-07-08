// primitive & reference data types


// primitive type --> doesnt take much space in stack
let num1 = 37;
let num2 = num1

console.log("value of num1 = ", num1)
console.log("value of num2 = ", num2)
num1++
console.log("after incrementing")
console.log("value of num1 = ", num1)
console.log("value of num2 = ", num2)


// reference types
// array

let array1 = ["item1", "item2"]
let array2 = array1


console.log("value of array1 = ", array1)
console.log("value of array2 = ", array2)

array1.push("item3")

console.log("value of array1 = ", array1)
console.log("value of array2 = ", array2)
