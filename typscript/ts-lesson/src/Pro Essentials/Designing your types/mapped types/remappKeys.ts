interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributesGetter = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

const funcObj: AttributesGetter = {
  getFirstName: () => "Johnsen",
  getLastName: () => "Berdin",
  getAge: () => Number("26"),
};

console.log(funcObj.getAge());
