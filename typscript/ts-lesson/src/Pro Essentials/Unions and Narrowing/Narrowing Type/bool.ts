const validateUsername = (name: string | null): boolean => {
  return typeof name === "string" && name.length > 5;
};

console.log(validateUsername("Johnsen"));
