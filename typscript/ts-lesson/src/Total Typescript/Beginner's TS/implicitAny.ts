const addTwoNumbers = (a: number, b: number) => {
  return a * b;
};
console.log(addTwoNumbers(2, 6));

const addTwoObjNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};
console.log(addTwoObjNumbers({ first: 10, second: 5 }));

// optional param
const getName = (params: { first: string; last?: string }) => {
  return params.last ? params.first + " " + params.last : params.first;
};
console.log(getName({ first: "Johnsen", last: "Berdin" }));
