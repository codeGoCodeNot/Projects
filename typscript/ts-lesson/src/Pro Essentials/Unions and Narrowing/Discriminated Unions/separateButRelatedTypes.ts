type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  width: number;
};

type Shape = Circle | Square | Rectangle;

const calculatedArea = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.sideLength ** 2;
  } else {
    return shape.length * shape.width;
  }
};

const circle = calculatedArea({
  kind: "circle",
  radius: 5,
});
console.log(`Circle Area: ${circle}`);

const square = calculatedArea({
  kind: "square",
  sideLength: 5,
});
console.log(`Square Area: ${square}`);

const rectangle = calculatedArea({
  kind: "rectangle",
  length: 10,
  width: 5,
});
console.log(`Rectangle Area: ${rectangle}`);
