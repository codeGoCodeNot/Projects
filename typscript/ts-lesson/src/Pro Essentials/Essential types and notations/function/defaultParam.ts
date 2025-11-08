type Rectangle = {
  width: 10;
  height: 20;
};

const getRectangleArea = (rectangle: Rectangle) =>
  rectangle.width * rectangle.height;

const getRectanglePerimeter = (rectangle: Rectangle) =>
  2 * (rectangle.width + rectangle.height);

const width = 10;
const height = 20;

console.log(getRectangleArea({ width, height }));
console.log(getRectanglePerimeter({ width: 10, height: 20 }));
