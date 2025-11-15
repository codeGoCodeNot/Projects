const myFunc = (args: string) => {
  return args;
};

// ReturnType extracts the return type of a function type.
// ReturnType<Type>
type ReturnValue = ReturnType<typeof myFunc>;
const returnType: ReturnValue = myFunc("hello");
console.log(returnType);

// parameter
const makeQuery = (
  url: string,
  opts: {
    method: string;
    headers: Record<string, string>;
    body: string;
  }
) => {
  return [url, opts.method, opts.headers, opts.body];
};

// Parameters extracts the parameter types of a function type as an array
// Parameters<Type>
type MakeQueryParameters = Parameters<typeof makeQuery>;
const parameterType: MakeQueryParameters = [
  "https://example.com",
  {
    method: "POST",
    headers: { "1": "application/json" },
    body: JSON.stringify({ data: 1 }),
  },
];

const paramType = makeQuery(...parameterType);
console.log(paramType);
