// interface DynamicObj {
//   [key: string]: number;
// }

// type DynamicObj = {
//   [key: string]: number;
// };

// const scores: DynamicObj = {};

// Record<Keys, Type>
const scores: Record<string, number> = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

console.log(scores);
