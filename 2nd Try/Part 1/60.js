// sort method
// ASCI Table

// Sort - it will mutate/change the array

// 5,9,1200,400,3000

const numbers = [5, 9, 1200, 400, 3000];
numbers.sort();
console.log(numbers); // result will be based on ascii value not on the number provided in the array

const userNames = ["dilip", "abc", "vishal", "pankaj", "Parul"];

userNames.sort();

console.log(userNames);

const numbers1 = [5, 9, 1200, 400, 3000];
numbers1.sort((a, b) => {
  //   return b - a;// descending
  return a - b; // ascending
});
// flipkart/amazon, price sort low to high
console.log(numbers1);

const Products = [
  {
    produdctId: 1,
    productName: "Mobile",
    price: 23000,
  },
  {
    produdctId: 2,
    productName: "Labtop",
    price: 43000,
  },
  {
    produdctId: 3,
    productName: "TV",
    price: 15000,
  },
];

// low to High
Products.sort((a, b) => {
  return a.price - b.price;
});

console.log(Products);
