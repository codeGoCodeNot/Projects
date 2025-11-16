type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};

const dataShape: CreateDataShape<string, TypeError> = {
  data: "resolve",
  error: new Error("Errors"),
};

console.log(dataShape);

// Optional Type Parameters or default type helpers
type Number<T = 2> = T;
const number2: Number = 2;
console.log(number2);
