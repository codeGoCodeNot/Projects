interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  roles: string[];
}

function assertIsAdminUser(user: User | AdminUser): asserts user is AdminUser {
  if (!("roles" in user)) {
    throw new Error("User is not an admin");
  }
}

function handleRequest(user: User | AdminUser): AdminUser {
  assertIsAdminUser(user);
  return user;
}

// handleRequest({ id: "2", name: "Mugen" });
console.log(handleRequest({ id: "2", name: "Mugen", roles: ["admin"] }));
