const makeSafe =
  <TFunc extends (...args: any[]) => any>(func: TFunc) =>
  (
    ...args: Parameters<TFunc>
  ):
    | {
        type: "success";
        result: ReturnType<TFunc>;
      }
    | {
        type: "failure";
        error: Error;
      } => {
    try {
      const result = func(...args);

      return {
        type: "success",
        result,
      };
    } catch (e) {
      return {
        type: "failure",
        error: e as Error,
      };
    }
  };

const explode = (x: number) => {
  if (x < 0) throw new Error("negative");
  return x;
};

const safeExplode = makeSafe(explode);
console.log(safeExplode(2));
