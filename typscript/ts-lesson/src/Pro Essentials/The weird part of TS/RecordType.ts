const acceptOnlyEmptyObject = (input: Record<PropertyKey, never>) => {
  return input;
};

console.log(acceptOnlyEmptyObject({}));

// @ts-expect-error // not assignable to record type never
console.log(acceptOnlyEmptyObject("hello"));
