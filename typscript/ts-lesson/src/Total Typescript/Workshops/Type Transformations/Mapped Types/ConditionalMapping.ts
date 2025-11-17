interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type SearchForId = `${string}${"id" | "Id"}${string}`;

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K];
};

type Result = OnlyIdKeys<Example>;
const result: Result = {
  groupId: "111",
  id: "1",
  organisationId: "21321321",
};

console.log(result);
