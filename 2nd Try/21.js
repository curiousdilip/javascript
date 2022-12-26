//  While loop Example

let num = 10;
let total = 0;
let i = 0;

while (i <= 10) {
  // takes longer time
  total = total + i;
  i++;
  console.log(total);
}

// sum of n natural no. - (n*(n+1))/2

let full = (num * (num + 1)) / 2; //taking less time
console.log(full);
