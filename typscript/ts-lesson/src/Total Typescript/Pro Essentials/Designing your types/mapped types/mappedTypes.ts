interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

// mapped types are a feature in ts which allow you to map over a union of types
// to create a new type

// syntax
// {[Key in keyof Properties]:type => Properties[Key]}
type AttributeGetters = {
  [K in keyof Attributes]: (input: Attributes[K]) => Attributes[K];
};
const getters: AttributeGetters = {
  firstName: (input) => input,
  lastName: (input) => input,
  age: (input) => input,
  email: (input) => input,
};

const user = () => {
  const firstName = getters.firstName("Johnsen");
  const lastName = getters.lastName("Berdin");
  const age = getters.age(26);
  const email = getters.email("j@yahoo.com");

  return `I am ${firstName} ${lastName}, I am ${age} years old. My emails is ${email} `;
};

console.log(user());

type AttributeStrOrNum = { [K in keyof Attributes]: Attributes[K] };
const primitive: AttributeStrOrNum = {
  firstName: "Johnsen",
  lastName: "Berdin",
  age: 26,
  email: "johnsenberdin@yahoo.com",
};

console.log(primitive);
