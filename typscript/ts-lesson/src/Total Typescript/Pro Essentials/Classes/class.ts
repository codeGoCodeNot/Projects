type ViewMode = "hidden" | "visible" | "selected";

class Shape {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  // getter
  // by default is for readonly
  get position() {
    return { x: this.#x, y: this.#y };
  }

  // setter
  set position(newPosition) {
    this.#x = newPosition?.x ?? 0;
    this.#y = newPosition?.y ?? 0;
  }

  // method
  move = (x: number, y: number) => {
    this.#x = x;
    this.#y = y;
    return `${this.#x} ${this.#y}`;
  };
}

class CanvasNode extends Shape {
  #viewMode: ViewMode;

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    super(options);
    this.#viewMode = options?.viewMode ?? "visible";
  }

  hide() {
    this.#viewMode = "hidden";
  }

  get isHidden() {
    return this.#viewMode === "hidden";
  }

  get isSelected() {
    return this.#viewMode === "selected";
  }

  get isVisible() {
    return this.#viewMode === "visible";
  }
}

const shape = new Shape();
console.log(shape.move(20, 40));

const canvasNode = new CanvasNode({ x: 10, y: 20 });

console.log(canvasNode);

// get
const exampleInstance = new CanvasNode();
console.log(exampleInstance.position.x);
console.log(exampleInstance.position.y);

// setter
canvasNode.position = { x: 10, y: 20 };
console.log(canvasNode.position);
