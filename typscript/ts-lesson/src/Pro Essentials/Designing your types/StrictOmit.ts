type StrictOmit<T, K extends keyof T> = Omit<T, K>;

type RemoveB = StrictOmit<{ a: string; b: string; c: string }, "b">;

const noB: RemoveB = {
  a: "a",
  c: "c",
};

console.log(noB.a, noB.c);

// K extends keyof T restraint omit to remove unknown/undefined properties
