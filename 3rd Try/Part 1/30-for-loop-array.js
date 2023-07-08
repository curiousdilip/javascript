// for loop in array

let fruit = ["apple", "orange", "grapes"]
let fruits = []
// for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i].toUpperCase())
// }

for (i = 0; i < fruit.length; i++) {
    fruits.push(fruit[i].toUpperCase())
}

console.log(fruits)