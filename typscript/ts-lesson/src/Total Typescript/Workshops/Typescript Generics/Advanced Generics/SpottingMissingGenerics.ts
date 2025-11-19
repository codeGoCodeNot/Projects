const getValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const obj = {
  a: 1,
  b: "some-string",
  c: true,
};

const numberResult = getValue(obj, "a");
const stringResult = getValue(obj, "b");
const booleanResult = getValue(obj, "c");

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
