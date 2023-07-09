// spread operator

const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]

// const newarray = [...array1, ...array2]
const newarray = [..."abcdefghijklmnop"]//string are iterable, numbers are not


// console.log(newarray)

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}

const newObj = { ...obj1, ...obj2, email: "dkmrya02@gmail.com" }//we can add another key value pair also

const nobj = { ..."abc" }

console.log(newObj)
console.log(nobj)