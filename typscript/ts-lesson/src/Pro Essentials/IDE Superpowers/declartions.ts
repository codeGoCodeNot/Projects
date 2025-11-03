let bankSavings = 50_000;
let user = {
  name: "Alice",
  age: 25,
};

const copyObj = { ...user, bankSavings };

console.log(typeof bankSavings);
console.log(typeof user);
console.log(`${copyObj.bankSavings} pesos`);
