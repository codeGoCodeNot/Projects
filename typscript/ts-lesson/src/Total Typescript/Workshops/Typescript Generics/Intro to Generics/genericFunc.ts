const sum = <T>(array: readonly T[], mapper: (item: T) => number): number =>
  array.reduce((total, current) => total + mapper(current), 0);

const arr = ["1", "2", "5"] as const;

const result = sum(arr, (item) => +item);

console.log(result);

// sum(array = arr, mapper = (item: string) => parseInt(item))
