// extends has extra protection so
// I can't put another arguemnet of Result T other than {message: string}

type Result<TResult, TError extends { message: string } = Error> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      error: TError;
    };

const createRandomNumber = (): Result<number> => {
  const num = Math.floor(Math.random() * 5);

  if (num > 1) {
    return {
      success: true,
      data: num,
    };
  }

  return {
    success: false,
    error: new Error("Something went wrong"),
  };
};

console.log(createRandomNumber());
