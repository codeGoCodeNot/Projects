const calculator = {
  x: 5,
  y: 10,
  add() {
    return this.x + this.y;
  },

  setValues(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this.x + this.y;
  },
};

console.log(calculator.add());
console.log(calculator.setValues(10, 20));
