// how to clone array

// how to concat 2 array

let array1 = ["item1", "item2"]
// let array2 = ["item1", "item2"]//not to optimum way of cloning

// let array2 = array1.slice(0)//first method  --> best according to its performance

// let array2 = [].concat(array1)// 2nd method to clone array

let array3 = ["item1", "item2"]
//add extra items in an array
// let array2 = [].concat(array1, ["item3", "item4"])
// let array2 = array1.slice(0).concat(["item4", "item5"])
let array2 = [...array1, "item4", "item3", ...array3]
// new way // 3rd method

//let array2 = [...array1]// using spread operator , mostly people/ programmer use this method 



array1.push("item3")
console.log(array1 === array2);
console.log(array1);
console.log(array2);
