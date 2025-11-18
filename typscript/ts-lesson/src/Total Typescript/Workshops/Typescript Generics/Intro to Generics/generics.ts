const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");
console.log(typeof one);
console.log(typeof matt);

// constraint to string
const returnAstring = <T extends string>(t: T) => t;

const a = returnAstring("I am a string");
console.log(a);
