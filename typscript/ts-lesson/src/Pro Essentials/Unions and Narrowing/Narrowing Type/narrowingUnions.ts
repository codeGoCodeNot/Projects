const convertTime = (time: string | number) => {
  return typeof time === "string" ? "string" : "number";
};

console.log(convertTime(20));
