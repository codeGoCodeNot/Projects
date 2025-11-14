const coerceAmount = (amount: number | { amount: number }) => {
  return typeof amount === "number" ? amount : amount.amount;
};

console.log(coerceAmount({ amount: 20 }));
console.log(coerceAmount(20));
