//  break keyword

// continue keyword

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    break; //jumps out of the loop
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue; // skipps one iteration of loop
  }
  console.log(i);
}
