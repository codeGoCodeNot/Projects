const concantenate = (num: number, ...strings: string[]) =>
  `${strings.join(" ")} 
age:${num}`;
console.log(concantenate(26, "Johnsen", "Berdin"));
