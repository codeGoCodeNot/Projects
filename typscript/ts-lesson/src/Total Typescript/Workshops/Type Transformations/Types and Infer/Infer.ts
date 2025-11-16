const fn = () => {
  return "";
};

type FakeReturnType<T> = T extends ((...args: any) => infer R extends string)
  ? R
  : never;
type FuncResult = FakeReturnType<typeof fn>;

const result: FuncResult = fn();
console.log(typeof result);

//
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;
type DataValue = GetDataValue<{ data: { id: "hello" } }>;
const dataValue: DataValue = { id: "hello" };
console.log(dataValue);
