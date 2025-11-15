// Awaited<Type>

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

// Top level await
(async () => {
  const resolveValue: ReturnValue = await getUser();
  console.log(resolveValue);
})();
