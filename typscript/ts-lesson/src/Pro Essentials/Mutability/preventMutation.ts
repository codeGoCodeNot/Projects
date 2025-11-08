const printNames = (names: readonly string[]) => {
  for (const name of names) {
    console.log(name);
  }
  const newName = [...names, "Mugen", "Mark"];
  console.log(newName);
};

// function printNamesMutable(names: string[]) {
//   for (const name of names) {
//     console.log(name);
//   }
// }

const readonlyName = ["Johnsen", "Mugen", "Marco"] as const;
const mutableName = ["Johnsen", "Mugen", "Marco"];

printNames(readonlyName);
// printNamesMutable(readonlyName) error
printNames(mutableName);

// If we declare a read-only array, which we often do using the as const syntax,
// we can only pass it to printNamesReadOnly.
// Attempting to pass it to printNamesMutable will yield an error:
