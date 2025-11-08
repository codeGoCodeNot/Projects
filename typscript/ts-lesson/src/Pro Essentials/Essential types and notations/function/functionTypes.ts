type User = {
  name: string;
  id: number;
  hobby: string;
};

type Func = (user: User) => User;

const changeValue = (users: User[], id: number, changeName: Func) =>
  users.map((user) => (user.id === id ? changeName(user) : user));

const users: User[] = [
  { name: "Johnsen", id: 1, hobby: "programming" },
  { name: "Queenie", id: 2, hobby: "N/A" },
];

const result = changeValue(users, 2, (user) => ({
  ...user,
  name: "Pia",
  hobby: "big boobs",
}));
result.forEach((i) => console.log(i));
