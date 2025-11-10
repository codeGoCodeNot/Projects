type PromiseFunc<T> = () => Promise<T>;

const safeFunction =
  <T>(func: PromiseFunc<T>) =>
  async () => {
    try {
      const result = await func();
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };

const func = safeFunction(async () => {
  if (Math.floor(Math.random() * 2) < 1) {
    throw new Error("Something went wrong");
  }
  return 123;
});

const result = await func();

console.log(result);
