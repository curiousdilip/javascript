// nested destructuring

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

// const [user1, user2, user3] = users

// console.log(user1)

// want to user 1 firstname and user3 gender

const [{ name: user1Name }, , { gender: user3Gender }] = users
console.log(user1Name)
console.log(user3Gender)
