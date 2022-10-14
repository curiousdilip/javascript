// some method

const number = [3, 5, 8, 9];

// kya ek bhi number esa hai jo even hai
// true

// const ans = number.some((number) => number % 2 === 0);

// console.log(ans);

const userCart = [
  {
    productId: 1,
    productName: "mobile",
    price: 12000,
  },
  {
    productId: 2,
    productName: "labtop",
    price: 22000,
  },
  {
    productId: 3,
    productName: "TV",
    price: 15000,
  },
  {
    productId: 5,
    productName: "macbook",
    price: 250000,
  },
];

const ans = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans);
