const idx = 4;
const arr = Array.from({ length: idx }, (_, i) =>
  Array.from({ length: idx }, (_, j) =>
    Array.from({ length: idx }, (_, x) => (i + 1) * (j + 1) * (x + 1))
  )
);

console.log(JSON.stringify(arr));
