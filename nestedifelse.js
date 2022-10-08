// nested if else

// winning number 19

// 19 your  guess is right
// 17 too loww
// 20 too high

let winnumber = 19;
let user = +prompt("gues a number"); // prompt takes input string as input
if (user === winnumber) {
  console.log("your guess is right!");
} else {
  if (user < winnumber) {
    console.log("too low");
  } else {
    console.log("too high");
  }
}
