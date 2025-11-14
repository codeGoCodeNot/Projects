type Direction = "up" | "left" | "down" | "right";

const move = (direction: Direction, distance: number | string) =>
  console.log(`direction: ${direction} distance: ${distance}`);

move("up", "10");
