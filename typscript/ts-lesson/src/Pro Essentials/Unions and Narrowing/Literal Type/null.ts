const getUserName = (username: string | null) => `User: ${username ?? "Guest"}`;
console.log(getUserName(null));
