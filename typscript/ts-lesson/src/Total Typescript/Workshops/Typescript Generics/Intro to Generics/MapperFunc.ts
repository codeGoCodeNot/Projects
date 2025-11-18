const concatenateFirstNameAndLastName = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  user: T
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const users = [
  {
    firstName: "Johnsen",
    lastName: "Berdin",
  },
];

const result = users.map(concatenateFirstNameAndLastName);
console.log(result[0]?.fullName);
