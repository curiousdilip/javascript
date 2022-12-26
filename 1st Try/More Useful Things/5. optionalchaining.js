// optional Chaining

const user = {
  firstName: "Dilip",
  //   address: { houseNumber: "13" },
};

// console.log(user.address.houseNumber);
// console.log(user.firstName);

console.log(user?.address?.houseNumber); // access nested object
console.log(user?.firstName);
