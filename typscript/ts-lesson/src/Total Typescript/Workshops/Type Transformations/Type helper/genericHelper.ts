type ReturnWhatIPassIn<T> = T;

const returnWhatIPassIn: ReturnWhatIPassIn<number> = 5;
console.log(returnWhatIPassIn);

type Maybe<T> = T | null | undefined;
const any: Maybe<null>[] = [null];
// null | undefined | string | number | boolean | symbol
console.log(any);
