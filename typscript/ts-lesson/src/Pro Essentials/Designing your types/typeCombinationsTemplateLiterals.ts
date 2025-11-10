type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwich with ${Filling} $20`;

const sandwich: Sandwich = "rye sandwich with ham $20";

console.log(sandwich);
