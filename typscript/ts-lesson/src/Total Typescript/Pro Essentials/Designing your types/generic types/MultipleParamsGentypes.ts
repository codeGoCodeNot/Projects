// type PromiseFunc<TInput, TOutput> = (input: TInput) => Promise<TOutput>;

// type Example1 = PromiseFunc<string, string>;
// type Example2 = PromiseFunc<boolean, number>;

// handle Errors
type Result<TResult, TError> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      data: TError;
    };

const createRandomNumber = (): Result<number, Error> => {
  const num = Math.floor(Math.random() * 9);

  if (num > 1) {
    return {
      success: true,
      data: num,
    };
  }

  return {
    success: false,
    data: new Error("Data can't return 0"),
  };
};

console.log(createRandomNumber());
