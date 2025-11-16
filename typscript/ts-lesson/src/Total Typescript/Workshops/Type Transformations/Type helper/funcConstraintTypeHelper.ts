type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

const fn = (n: number, s: string) => s.length > n;

const inforForFn: GetParametersAndReturnType<typeof fn> = {
  params: [67, "hello world!"],
  returnValue: true,
};
const runTimeResult = fn(...inforForFn.params);
console.log(runTimeResult);

// constraining Type for anything but null or undefined
type Maybe<T extends {}> = T;
const notNullOrUndefined: Maybe<string> = "not null or undefined";
console.log(notNullOrUndefined);
