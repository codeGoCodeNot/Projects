interface ShapeOptions {
  x: number;
  y: number;
}

type IShape = {
  position: { x: number; y: number };
  move: (deltaX: number, deltaY: number) => void;
};

class Shape implements IShape {
  #x: number;
  #y: number;

  constructor(initial?: ShapeOptions) {
    this.#x = initial?.x ?? 0;
    this.#y = initial?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
    return this;
  }
}

const shape = new Shape({ x: 20, y: 40 });
console.log(shape);

console.log(shape.move(10, 20));
