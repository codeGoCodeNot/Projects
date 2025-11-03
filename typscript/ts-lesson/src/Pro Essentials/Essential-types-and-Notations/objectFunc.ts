// type aliases
type Rectangle = { width: number; height: number };

const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

const area = getRectangleArea({
  width: 20,
  height: 20,
});
console.log(area);

const perimeter = getRectanglePerimeter({
  width: 10,
  height: 20,
});
console.log(perimeter);
