interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface Price {
  price: number | string;
}

interface User extends BaseEntity, Price {
  name: string;
  email: string;
}

const user: User = {
  id: "2",
  createdAt: new Date("2025-11-07"),
  name: "Johnsen",
  email: "johnsenberdin2930@gmail.com",
  price: "50",
};

for (const key in user) {
  const keys = key as keyof User;
  const value = user[keys];
  console.log(`${keys}: ${value}`);
}
