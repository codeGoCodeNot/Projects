interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin"; // Union T
  posts: Post[];
}

type Post = {
  id: number;
  title: string;
};

const defaultUser: User = {
  id: 2,
  firstName: "Johnsen",
  lastName: "Berdin",
  role: "super-admin",
  posts: [
    {
      id: 1,
      title: "How to not choke in my bf's dick?",
    },
  ],
};

console.log(defaultUser.firstName, defaultUser.lastName);
defaultUser.posts.forEach((i) => console.log(i));

const makeUser = (user: User) => {
  return user.role;
};

console.log(makeUser(defaultUser));
