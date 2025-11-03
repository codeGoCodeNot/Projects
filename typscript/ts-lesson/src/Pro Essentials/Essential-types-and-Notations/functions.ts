const concatCatName = (first: string, last?: string) => {
  return !last ? first : first + " " + last;
};
const result = concatCatName("Johnsen");
console.log(result);
// the ? in param will make the param optional
// last value now is either string || undefined

const concatCatName2 = (first: string, last = "Berdin") => {
  return !last ? first : first + " " + last;
};

const result2 = concatCatName2("Johnsen");
console.log(result2);
// last: string = defaultValue or last = defaultValue

// Object parameters
// user: { first: string; last: string } this part is object literals
const concatCatName3 = (user: { first: string; last?: string }) => {
  return !user.last ? user.first : user.first + " " + user.last;
};

const result3 = concatCatName3({
  first: "Mugen",
});

console.log(result3);
// same to string I can still make my param as optional
