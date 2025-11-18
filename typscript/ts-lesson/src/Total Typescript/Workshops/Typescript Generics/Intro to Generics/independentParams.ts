const returnBothOfWhatIPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

const aAndB = returnBothOfWhatIPassIn("str", 123);
console.log(aAndB);

const returnObj = <A, B>(params: { a: A; b: B }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

const obj = returnObj({ a: "Hello world!", b: 123 });
console.log(obj);
