const getUsername = (username: string | null): string =>
  username !== null ? username : "Guest";

console.log(getUsername("Johnsen"));
console.log(getUsername(null));
