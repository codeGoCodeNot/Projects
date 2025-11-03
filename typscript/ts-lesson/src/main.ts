type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Mugen",
    email: "mugen@example.com",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Johnsen",
    email: "johnsen@example.com",
    age: 30,
    isActive: false,
  },
  {
    id: 3,
    name: "BroCode",
    email: "brocode@example.com",
    age: 21,
    isActive: true,
  },
  {
    id: 4,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 5,
    name: "Bob",
    email: "bob@example.com",
    age: 24,
    isActive: false,
  },
];

type UserFunc = (user: User) => User;

const handleUser = (
  users: User[],
  id: number,
  modifyUser: UserFunc
): User[] => {
  return users.map((user) => (user.id === id ? modifyUser(user) : user));
};

const result = handleUser(users, 4, (user) => ({
  ...user,
}));

console.log(result);
