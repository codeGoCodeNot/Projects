const concatName = (user: { first: string; last: string }) =>
  `${user.first} ${user.last}`;
const result = concatName({ first: "Johnsen", last: "Berdin" });

console.log(result);
