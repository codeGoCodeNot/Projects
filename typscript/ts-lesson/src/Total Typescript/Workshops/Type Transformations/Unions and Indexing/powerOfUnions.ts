const walkToTheOffice = (action: "grabACoffee" | "keepWalking" | "goHome") => {
  const transitions = {
    grabACoffee: "late",
    keepWalking: "on time",
    goHome: "absent",
  } as const;

  const result = transitions[action];
  return result;
};

console.log(walkToTheOffice("grabACoffee"));
console.log(walkToTheOffice("keepWalking"));
console.log(walkToTheOffice("goHome"));
