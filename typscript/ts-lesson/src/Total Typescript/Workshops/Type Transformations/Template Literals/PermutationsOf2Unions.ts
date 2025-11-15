type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwich with ${Filling}`;
const sandwich: Sandwich[] = [
  "brown sandwich with cheese",
  "rye sandwich with cheese",
  "white sandwich with cheese",
];
console.log(sandwich[0]);
