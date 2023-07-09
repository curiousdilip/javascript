// how to iterate objects

const person = { age: 24, name: "Dilip", address: "E-13, Qutub vihar, ND-71", "person hobbies": ["guitar", "sleeping", "music"] }

// for in loop to iterate objects


//print key
for (let key in person) {
    console.log(key)
}
//print values
for (let key in person) {
    console.log(person[key])
}
//print object
for (let key in person) {
    // console.log(`${key} : ${person[key]}`)
    console.log(key, ":", person[key])
}

// Object.keys

console.log(Object.keys(person))


// for of loop

for (let key of Object.keys(person)) {
    console.log(person[key])
}