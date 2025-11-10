const uniqueArray = <T>(arr: T[]) => {
  return Array.from(new Set(arr));
};

const numArr = uniqueArray([1, 1, 2, 3, 4, 4, 5, 5]);
console.log(numArr);

const strArr = uniqueArray(["a", "a", "A", "A", "b", "c"]);
console.log(strArr);

//  Parameter constraint
const UNKNOWN_CODE = 8000;
const addCodeToError = <TError extends { message: string; code?: number }>(
  error: TError
) => {
  return { ...error, code: error.code ?? UNKNOWN_CODE };
};

const errorWithCode = addCodeToError({
  foo: 123,
  bar: "123",
  message: "No error",
  success: 200,
  code: 400,
});
console.log(errorWithCode);
