// nested if else

// winnging number 19
// 19 your guess is right
// 17 too low
// 20 too  high

let wn = 19
let guess = +prompt("Guess a Number")
if (guess === wn) {
    console.log("you guess is right");

} else if (guess > wn) {
    console.log("you guess is high");
} else {
    console.log("you guess is low");

}
