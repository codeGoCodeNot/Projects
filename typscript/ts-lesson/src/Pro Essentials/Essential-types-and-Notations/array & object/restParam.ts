const concatenate = (...strings: string[]) => {
  return strings.join("");
};

const result = concatenate("Hello", " ", "World");
console.log(result);
