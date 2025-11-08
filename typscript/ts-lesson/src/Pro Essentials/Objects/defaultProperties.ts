// interface Scores {
//   [keys: string]: number;
//   math: number;
//   english: number;
// }

// or

type Scores = {
  [keys: string]: number;
  math: number;
  english: number;
};

const scores: Scores = {
  math: 95,
  english: 90,
};

scores.filipino = 98;
scores.athletics = 75;

console.log(scores);
