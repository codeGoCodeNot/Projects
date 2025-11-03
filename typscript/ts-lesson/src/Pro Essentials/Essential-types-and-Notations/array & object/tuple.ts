const setRange = (range: [number, number, number?]) => {
  const x = range[0];
  const y = range[1];
  const z = range[2] ?? "No number";
  return { x, y, z };
};

const result = setRange([1, 3]);
console.log(result);
