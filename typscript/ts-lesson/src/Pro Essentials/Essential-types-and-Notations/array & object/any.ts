const anySample = (x: any) => {
  console.log(x);
  return x;
};

anySample("20");
anySample(22);
anySample(true);

// any can be anything it can be assigned to anything; number , strings or bool

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Johnsen" },
  { id: 2, name: "Mugen" },
];

const changeUser = (users: User[], id: number, makeChange: any) => {
  return users.map((user) => (user.id === id ? makeChange(user) : user));
};

const userChange = changeUser(users, 1, (mc: any) => ({
  ...mc,
  name: "Queenie",
}));
console.log(userChange);
