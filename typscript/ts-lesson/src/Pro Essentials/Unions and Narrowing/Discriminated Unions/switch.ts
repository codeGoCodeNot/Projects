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

function assertNever(x: never): never {
  throw new Error("Unhandled shape: " + JSON.stringify(x));
}

const calculatedArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle": {
      if (shape.radius < 0) throw new Error("radius must be non-negative");
      return shape.radius ** 2 * Math.PI;
    }

    case "square": {
      if (shape.sideLength < 0)
        throw new Error("sideLength must be non-negative");
      return shape.sideLength ** 2;
    }

    case "rectangle": {
      if (shape.length < 0 || shape.width < 0)
        throw new Error("length/width must be non-negative");
      return shape.length * shape.width;
    }

    default: {
      return assertNever(shape);
    }
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

// const triangle = calculatedArea({
//   kind: "triangle",
//   width: 1,
// });
