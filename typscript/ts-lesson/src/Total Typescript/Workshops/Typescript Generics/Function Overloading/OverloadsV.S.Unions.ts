function runGenerator(generator: () => number): number;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: { run: () => string } | (() => number)) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

// if they return the same type no need to overload it

// function runGenerator(generator: { run: () => string } | (() => string)) {
//   if (typeof generator === "function") {
//     return generator();
//   }
//   return generator.run();
// }

const result = runGenerator({
  run: () => "hello",
});
console.log(result);

const result2 = runGenerator(() => 12312312312);
console.log(result2);
