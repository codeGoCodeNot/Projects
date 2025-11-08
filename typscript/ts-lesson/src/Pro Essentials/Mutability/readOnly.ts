type User = {
  readonly id: number;
  name: string;
  age: number;
};

const updateUser = (user: User) => {
  user.name = "Jane Doe";
  user.age = 30;
};

const u: User = { id: 1, name: "Johnsen", age: 25 };
updateUser(u);
console.log(u);

type SearchParams = {
  q?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: "asc" | "desc";
};

type ReadOnly = Readonly<SearchParams>;

const handleSearchParams = (search: ReadOnly) => {
  return search;
};

const readOnly: ReadOnly = {
  q: "hello world!",
  page: 5,
  pageSize: 2,
  sort: "dunno",
  order: "desc",
};

const result = handleSearchParams(readOnly);
console.log(result);
