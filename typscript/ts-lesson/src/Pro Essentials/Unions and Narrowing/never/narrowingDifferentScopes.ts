type SearchParams = {
  searchParams: { name?: string };
  users: {
    id: string;
    name: string;
  }[];
};

const findUser = (params: SearchParams) => {
  const name = params.searchParams.name;
  if (name) {
    return params.users.filter((user) => user.name.includes(name));
  }
  return params.users;
};

const result = findUser({
  searchParams: { name: "Johnsen" },
  users: [
    { id: "1", name: "Bob" },
    { id: "2", name: "Johnsen" },
  ],
});

result.forEach((c) => console.log(c));
if (result.length === 0) {
  console.log("No user found!");
}
