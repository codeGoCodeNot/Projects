const parseValue = (value: unknown) => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string" &&
    value.data.id !== null
  ) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

const result = parseValue({
  data: {
    id: "123",
  },
});

console.log(result);
