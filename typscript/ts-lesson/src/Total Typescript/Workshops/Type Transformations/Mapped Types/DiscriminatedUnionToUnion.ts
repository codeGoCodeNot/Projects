type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

type TransformedFruit = {
  [K in Fruit as K["name"]]: `${K["name"]}: ${K["color"]}`;
}[Fruit["name"]];

const fruit: TransformedFruit = "banana: yellow";
console.log(fruit);
