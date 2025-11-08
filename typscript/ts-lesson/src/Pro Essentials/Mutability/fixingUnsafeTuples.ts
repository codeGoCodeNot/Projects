type Coordinate = [number, number];

const myHouse: Readonly<Coordinate> = [0, 0]; // prevent mutating myHouse
console.log(myHouse); //[0, 0]

const popHouse: Coordinate = [1, 2];
popHouse[1] = 12321321;
console.log(popHouse);

const dangerouseFunc = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerouseFunc(popHouse);
console.log(myHouse); //[]
console.log(popHouse);
