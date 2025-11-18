const createSet = <T = string>() => {
  return new Set<T>();
};

const stringSet = createSet<string>().add("string");
console.log(stringSet);
const noTypeArg = createSet();
console.log(noTypeArg);
