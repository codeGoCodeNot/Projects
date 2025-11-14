const createStringMap = <T>() => {
  return new Map<string, T>();
};

const numberMap = createStringMap<number>();
numberMap.set("id", 30);
numberMap.forEach((value, key) => console.log(`key: ${key} value:${value}`));

const objMap = createStringMap<{ a: number }>();
objMap.set("1", { a: 20 });
objMap.forEach((value, key) => console.log(`key: ${key}, value: ${value.a}`));
