// sort--it will change my array

// 5,9,1200,400,3000
// 5,9,400,1200,3000(expected)

// const numbers = [5, 9, 1200, 400, 3000];
// ["5", "9", "1200", "400", "3000"]
// [53,57,49,52]
// numbers.sort(); //is sorts number  by changing it into string using ascii code and then sorting
// console.log(numbers);

// sort method
// ASCII TABLE
// char :ascii value

// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort((a, b) => {
//   return a - b;
// });

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// price lowToHigh HighToLow

const products = [
  {
    productId: 1,
    productName: "p1",
    price: 300,
  },
  {
    productId: 2,
    productName: "p2",
    price: 3000,
  },
  {
    productId: 3,
    productName: "p3",
    price: 200,
  },
  {
    productId: 4,
    productName: "p4",
    price: 8000,
  },
  {
    productId: 5,
    productName: "p5",
    price: 500,
  },
];

// lowToHigh
// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });

// hightolow
const hightolow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(hightolow);
