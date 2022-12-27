// every method
const numbers = [2, 4, 6, 8, 10];

// to check all element are even?

const ans = numbers.every((number) => number % 2 === 0);
// callback function --> true/false (boolean)

// every method --> true/ false (boolean) - will give when all element are even

console.log(ans);

const userCart = [
  {
    produdctId: 1,
    productName: "Mobile",
    price: 12000,
  },
  {
    produdctId: 2,
    productName: "Labtop",
    price: 20000,
  },
  {
    produdctId: 3,
    productName: "TV",
    price: 15000,
  },
];

// check every product <30000

const ans1 = userCart.every((cartItem) => cartItem.price < 30000);

console.log(ans1);
