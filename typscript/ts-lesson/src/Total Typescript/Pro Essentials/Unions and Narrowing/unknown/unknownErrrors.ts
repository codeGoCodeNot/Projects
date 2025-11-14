const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong!");
  }

  console.log("All Goods!");
  return "All Goods!";
};

try {
  somethingDangerous();
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
  throw err;
}
