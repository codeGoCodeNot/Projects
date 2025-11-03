type DocTopic = {
  category: string;
  title: string;
  description: string;
  example: string;
};

const Categories = ["Basic", "Intermediate", "Advanced"];

const topics = [
  {
    title: "Types",
    description:
      "TypeScript types let you declare variable shapes and avoid bugs.",
    example: "let age: number = 25;",
  },
  {
    title: "Interfaces",
    description: "Interfaces define object structure.",
    example: "interface User { name: string; age: number; }",
  },
  {
    title: "Functions",
    description: "Type function arguments and returns.",
    example: "function greet(name: string): void { console.log(name); }",
  },
  {
    title: "Type Aliases",
    description: "Create custom types.",
    example: "type ID = string | number;",
  },
  {
    title: "Generics",
    description: "Functions/classes with flexible types.",
    example: "function identity<T>(value: T): T { return value; }",
  },
  {
    title: "Union Types",
    description: "Variable can be multiple types.",
    example: "let value: string | number;",
  },
  {
    title: "Type Assertions",
    description: "Override inferred types.",
    example:
      "let someValue: any = 'hello'; let strLen = (someValue as string).length;",
  },
  {
    title: "Enums",
    description: "Define named values.",
    example: "enum Direction { Up, Down }",
  },
  {
    title: "Literal Types",
    description: "Variable with exact value.",
    example: "let status: 'active' | 'inactive';",
  },
  {
    title: "Tuples",
    description: "Fixed-length array types.",
    example: "let point: [number, number];",
  },
  {
    title: "Optional Properties",
    description: "Props that might not exist.",
    example: "interface User { name: string; age?: number; }",
  },
  {
    title: "Readonly Properties",
    description: "Props that cannot change.",
    example: "interface Car { readonly vin: string; }",
  },
  {
    title: "Mapped Types",
    description: "Make new types from existing.",
    example: "type Flags<T> = { [K in keyof T]: boolean };",
  },
  {
    title: "Conditional Types",
    description: "Type depends on a condition.",
    example: "type IsString<T> = T extends string ? true : false;",
  },
  {
    title: "Never",
    description: "Type for unreachable code.",
    example: "function fail(): never { throw Error('fail'); }",
  },
  {
    title: "Unknown",
    description: "Type for uncertain value.",
    example: "let input: unknown;",
  },
  {
    title: "Keyof",
    description: "Get keys of a type.",
    example: "type Props = keyof User;",
  },
  {
    title: "Indexed Access",
    description: "Get type of property.",
    example: "type NameType = User['name'];",
  },
  {
    title: "Decorators",
    description: "Experimental syntax for classes.",
    example: "@sealed class BugReport {}",
  },
  {
    title: "Modules",
    description: "Split code into files.",
    example: "export function foo() {}",
  },
];

const docsData: DocTopic[] = [];
for (let i = 0; i < 100; i++) {
  const category = Categories[i % Categories.length];
  const topic = topics[i % topics.length];

  docsData.push({
    category,
    title: `${topic.title} #${i + 1}`,
    description: topic.description,
    example: topic.example,
  });
}

export default docsData;
