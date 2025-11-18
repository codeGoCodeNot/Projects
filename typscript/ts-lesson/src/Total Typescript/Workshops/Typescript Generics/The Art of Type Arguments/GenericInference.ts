// acceptsValueOnly func returns the exact result of what you pass
const acceptsValueOnly = <T>(t: T) => {
  return t;
};

const result = acceptsValueOnly("a"); // <"a">(t: "a") => "a"
console.log(result);

// When passing the string wrapped in an object,
// TS will actually infer it as string instead of literal
const acceptsValueInAnObject = <T>(obj: { input: T }) => {
  return obj.input;
};
const result2 = acceptsValueInAnObject({ input: "abc" });
console.log(result2);

// but if we add as const in the func call arg, then TS is going to return literal
const result2WithAsConst = acceptsValueInAnObject({ input: "abc" } as const);
console.log(result2WithAsConst);

// Constraints
// like the previous func with as const, we are getting a result of literal
const acceptsValueInAnObjectFieldWithConstraint = <T extends string>(obj: {
  input: T;
}) => obj.input;
const result3 = acceptsValueInAnObjectFieldWithConstraint({ input: "abc" });
console.log(result3);

// object constraint
// Since the constraint is not on the input itself, and is instead on the entire obj,
// TS doesn't actually infer the input
const acceptsValueWithObjectConstraint = <T extends { input: string }>(
  obj: T
) => obj.input;
const result4 = acceptsValueWithObjectConstraint({ input: "abc" });
console.log(result4);
