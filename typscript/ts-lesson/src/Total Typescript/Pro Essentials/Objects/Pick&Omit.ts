// Pick <Type, Keys>

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type Picked = Pick<User, "name" | "email">;

const objPick: Picked = {
  name: "Johnsen",
  email: "johnsenberdin2930@gmail.com",
};
console.log(objPick);

type Omitted = Omit<User, "id">;

const objOmit: Omitted = {
  name: "Johnsen",
  email: "johnsenberdin30@gmail.com",
  role: "Programmer",
};

console.log(objOmit);
