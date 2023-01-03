// nested if else

// wining number 19
// 17 too low
// 19 your gues is right
// 20 too high


let winNo=19;
let userGuess = +prompt("Guess a no.")

if(userGuess===winNo){
    console.log("Your guess is right");

}
else {if(userGuess>winNo){
    console.log("your guess is too High")
}

else{
    console.log("your guess too low")
}}