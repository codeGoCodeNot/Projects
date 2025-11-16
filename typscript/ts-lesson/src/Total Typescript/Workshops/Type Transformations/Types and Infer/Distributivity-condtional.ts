type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

const appleOrBanana: AppleOrBanana<Fruit> = "apple";
console.log(appleOrBanana);

// with infer

type Things = "laptop" | "pc" | "tablet";

type LaptopOrPc = Things extends infer T
  ? T extends "laptop" | "pc"
    ? T
    : never
  : never;

const pcGamer: LaptopOrPc = "pc";
console.log(pcGamer);
