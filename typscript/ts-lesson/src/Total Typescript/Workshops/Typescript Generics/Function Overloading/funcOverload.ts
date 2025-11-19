function returnWhatIPassIn<T extends number>(t: T): T;
function returnWhatIPassIn<T extends string>(t: T): T;
function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");
console.log(one);
console.log(matt);
