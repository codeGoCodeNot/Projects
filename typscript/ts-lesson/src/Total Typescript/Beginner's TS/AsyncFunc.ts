interface User {
  id: string | number;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: () => Promise<number>,
  getUser: (id: string | number) => Promise<User>
): Promise<User> => {
  const userId = await createUser();

  const user: User = await getUser(userId);

  return user;
};

const user = await createThenGetUser(
  async () => 123,
  async (id) => ({
    id,
    firstName: "Johnsen",
    lastName: "Berdin",
  })
);

console.log(user);
