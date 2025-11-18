// inferring literals
const inferItemLiteral = <T extends string | number>(t: T) => {
  return {
    output: t,
  };
};

const result1 = inferItemLiteral("a");
const result2 = inferItemLiteral(123);
console.log(result1, result2);

// infer the type of an array member
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);
console.log(statuses);
