/**
 * @param num will return a number but converted to string
 */

type Func = (num: number) => string;

const fn: Func = (num: number) => num.toString();

console.log(fn(20));
