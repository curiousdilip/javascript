//  reduce

const numbers = [1, 2, 3, 4, 5];
// aim : sunm of all the number in array
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1000); //initial Value

// accumulator, currentvalue, return
// 1            2               3
// 3            3               6
// 6            4               10
// 10           5               15

console.log(sum);

const userCart = [
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

const sumProduct = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(sumProduct);
