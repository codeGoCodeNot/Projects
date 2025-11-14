const concatName = (first: string, last?: string) => {
  return !last ? first : first + " " + last;
};
console.log(concatName("Johnsen", "Berdin"));
