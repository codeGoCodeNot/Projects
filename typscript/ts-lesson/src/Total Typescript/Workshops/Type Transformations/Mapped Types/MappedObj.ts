interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

// type Capitalized = {
//   [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
// };

const funcHandler: AttributeGetters = {
  firstName: () => "Johnsen",
  lastName: () => "Berdin",
  age: () => 26,
};
console.log(funcHandler.firstName(), funcHandler.lastName(), funcHandler.age());
