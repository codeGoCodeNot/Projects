// const makeQuery = (
//   url: string,
//   opts?: {
//     method?: string;
//     headers?: {
//       [key: string]: string;
//     };
//     body?: string;
//   }
// ) => {
//   console.log(`${url}`);
// };

// type MakeQueryParams = Parameters<typeof makeQuery>;

const createUser = (id: string) => {
  return {
    id,
    name: "John Doe",
    email: "example@email.com",
  };
};

// type User = ReturnType<typeof createUser>;

console.log(createUser("2"));
