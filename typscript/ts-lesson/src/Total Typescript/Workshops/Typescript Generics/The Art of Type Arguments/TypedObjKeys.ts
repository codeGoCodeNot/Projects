const typedObjectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

const result1 = typedObjectKeys({
  a: "123",
  b: 2,
});

console.log(result1);
