// Type predicate syntax: is Type

const hasDataAndId = (value: unknown): value is { data: { id: string } } => {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  );
};

const parseValue = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id; // red squiggly line under value
  }

  throw new Error("Parsing error!");
};

const parseValueAgain = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id; // red squiggly line under value
  }

  throw new Error("Parsing error!");
};

const result = parseValue({
  data: {
    id: "onetwo",
  },
});
console.log(result);

const result2 = parseValueAgain({
  data: {
    id: "123456",
  },
});

console.log(result2);
