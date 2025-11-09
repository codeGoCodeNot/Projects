interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  return Object.keys(user).forEach((u) => console.log(user[u as keyof User]));
}

printUser({
  id: 1,
  name: "Johnsen",
});
