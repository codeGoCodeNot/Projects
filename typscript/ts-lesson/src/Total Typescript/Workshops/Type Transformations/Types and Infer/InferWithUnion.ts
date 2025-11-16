const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParseResult<T> = T extends
  | { parse: () => infer R }
  | (() => infer R)
  | { extract: () => infer R }
  ? R
  : never;

type Parse1 = GetParseResult<typeof parser1>;
type Parse2 = GetParseResult<typeof parser2>;
type Parse3 = GetParseResult<typeof parser3>;

const parse1: Parse1 = 123;
const parse2: Parse2 = "hello world!";
const parse3: Parse3 = false;

console.log(parse1);
console.log(parse2);
console.log(parse3);
