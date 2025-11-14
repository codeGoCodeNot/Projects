const voidSample = (v: () => void) => {
  console.log("I'm void");
  v();
};

voidSample(() => null);
