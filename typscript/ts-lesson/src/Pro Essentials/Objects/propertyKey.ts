const hasKey = (obj: object, key: PropertyKey) => {
  return obj.hasOwnProperty(key);
};

const objStr = {
  foo: "bar",
};

const objNum = {
  1: 1,
};

const symbol = Symbol("foo");

console.log(hasKey(objStr, symbol));
console.log(hasKey(objNum, symbol));
