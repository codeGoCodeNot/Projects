interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

const values: ValuesAsUnionOfTuples = ["firstName", "Johnsen"];
console.log(values);

// mapping template literal
interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

const fruitMap: TransformedFruit = "apple:red";
console.log(fruitMap);
