type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
  "Johnsen Berdin"
];

type GetSurname<T> = T extends `${string} ${infer Last}` ? Last : never;

const getSurname: GetSurname<Names[5]> = "Berdin";
console.log(getSurname);

type Name = "Johnsen Giljang Berdin";
type GetName<T> = T extends `${string} ${infer Middle} ${string}`
  ? Middle
  : never;
const lastName: GetName<Name> = "Giljang";
console.log(lastName);
