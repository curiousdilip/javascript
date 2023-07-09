// objects inside array

// very useful in real world applications
const users = [
    {
        id: 1, name: "Dilip", email: "dkmrya02@gmail.com",
        age: 24,
        gender: "male"
    }, {
        id: 2, name: "Vishal", email: "vishal168@gmail.com",
        age: 21,
        gender: "male"
    },
    {
        id: 3, name: "Anjali", email: "anjali@gmail.com",
        age: 21,
        gender: "female"
    }
]

for (let user of users) {
    console.log(user.id)
}


console.log(users)