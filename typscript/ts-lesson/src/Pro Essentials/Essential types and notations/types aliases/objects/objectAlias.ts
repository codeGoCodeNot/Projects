type User = {
  first: string;
  last?: string;
};

const concantName = (user: User) => {
  return user.last ? user.first + " " + user.last : user.first;
};

const result = concantName({ first: "Johnsen" });
console.log(result);
