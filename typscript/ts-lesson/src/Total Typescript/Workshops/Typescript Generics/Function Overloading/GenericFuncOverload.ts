function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T>(t: T): T;
function returnWhatIPassInExceptFor1(t: unknown) {
  if (t === 1) {
    return 2;
  }
  return t;
}

const a = returnWhatIPassInExceptFor1("a");
const one = returnWhatIPassInExceptFor1(1);
const three = returnWhatIPassInExceptFor1(3);
console.log(a);
console.log(one);
console.log(three);
