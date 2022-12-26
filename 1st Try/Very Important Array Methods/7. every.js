// every method

// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((number) => number % 2 === 0);

// callback function --> true/false(boolean)

// every method--> true/false(boolean),true when condtion is applied to all elements in the array

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
];

// check every product < 30000

const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);
