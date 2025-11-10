type PromiseFunc<TArgs extends any[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;

const safeFunction =
  <TArgs extends any[], TResult>(func: PromiseFunc<TArgs, TResult>) =>
  async (...args: TArgs) => {
    try {
      const result = await func(...args);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };

const func = safeFunction(async () => {
  const randNum = Math.floor(Math.random() * 10);
  if (randNum < 5) {
    throw new Error("Something went wrong");
  }
  return randNum;
});

const result = await func();
console.log(result);

//
const func2 = safeFunction((name: string) => {
  return Promise.resolve(`hello ${name}`);
});

const result2 = await func2("world");
console.log(result2);
