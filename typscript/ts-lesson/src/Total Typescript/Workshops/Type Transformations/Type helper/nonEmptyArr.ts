type NonEmptyArray<T> = [T, T, ...T[]];
const arr: NonEmptyArray<number> = [2, 2];
console.log(arr);
