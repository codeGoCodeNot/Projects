const acceptAnythingExceptNullOrUndefined = (input: {}) => {
  return input;
};

acceptAnythingExceptNullOrUndefined("hello");
acceptAnythingExceptNullOrUndefined(42);
acceptAnythingExceptNullOrUndefined(true);
acceptAnythingExceptNullOrUndefined(Symbol("foo"));
acceptAnythingExceptNullOrUndefined({});
acceptAnythingExceptNullOrUndefined([]);
acceptAnythingExceptNullOrUndefined(() => {});
acceptAnythingExceptNullOrUndefined(/foo/);
acceptAnythingExceptNullOrUndefined(new Error("foo"));

acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  null
);
acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  undefined
);

// anything can be passed on empty object except null or undefined!

console.log(acceptAnythingExceptNullOrUndefined({ greet: "Hello" }));
