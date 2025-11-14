type User = {
  name: string;
  email: string;
};

type Product = {
  id: string;
  createdAt: string;
};

type Combine = Product & User;

const example: Combine = {
  id: "5",
  createdAt: "2025",
  name: "Johnsen",
  email: "johnsenberdin2930@gmail.com",
};

console.log(JSON.stringify(example));
