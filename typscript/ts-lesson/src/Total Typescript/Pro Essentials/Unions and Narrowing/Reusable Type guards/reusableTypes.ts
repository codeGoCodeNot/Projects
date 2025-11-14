const isArrayOfString = (value: unknown) => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
};

const joinNames = (value: unknown) => {
  if (isArrayOfString(value)) {
    return value.join(" ");
  }
};

const createSections = (value: unknown) => {
  if (isArrayOfString(value)) {
    return value.map((item) => `Section: ${item}`);
  }
};

console.log(joinNames(["Johnsen", "Berdin"]));
console.log(createSections(["1", "2"]));
