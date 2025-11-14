class CanvasNode {
  x = 0;
  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }
}

const positionFromCanvasNode = (node: CanvasNode) => {
  return {
    x: node.x,
    y: node.y,
  };
};

const node = new CanvasNode(10, 20).move(10, 20);
console.log(positionFromCanvasNode(node));
