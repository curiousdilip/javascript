//  some method

const numbers = [3, 5, 8, 9];

// kya ek bhi number even hai
// true
const ans = numbers.some((number) => number % 2 === 0);
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
  {
    produdctId: 4,
    productName: "Macbook",
    price: 150000,
  },
];

const ans1 = userCart.some((cartItem) => cartItem.price > 100000);

console.log(ans1);
