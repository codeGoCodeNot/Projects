// const returnBothOfWhatIPassIn = <T1, T2>(params: {
//   a: T1;
//   b: T2;
// }): [T1, T2] => {
//   return [params.a, params.b];
// };

const returnBothOfWhatIPassIn = <T extends { a: unknown; b: unknown }>(
  params: T
): [T["a"], T["b"]] => {
  return [params.a, params.b];
};

const result = returnBothOfWhatIPassIn({
  a: "a",
  b: 2,
});

console.log(result);
