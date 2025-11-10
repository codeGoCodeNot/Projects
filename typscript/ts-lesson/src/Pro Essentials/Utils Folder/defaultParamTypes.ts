const createStringMap = <T = string>() => {
  return new Map<string, T>();
};

const stringMap = createStringMap();
stringMap.set("foo", "123");
console.log(stringMap);
