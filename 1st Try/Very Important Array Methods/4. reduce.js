// reduce

const numbers = [1, 2, 3, 4, 5, 6];

//aim : sum of all the numbers in array

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // inital value can be added

// accumulator, currentvalue,return
// 1            2               3
// 3            3               6
// 6            4               10
// 10           5               15
// 15           10              25

// console.log(sum);

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

const total = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

// total price  currentvalue    return
// 0                { }             12000
// 12000            22000           34000
// 34000            15000           49000

console.log(total);
