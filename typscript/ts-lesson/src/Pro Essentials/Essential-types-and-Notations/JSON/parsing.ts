type ParseType = {
  name: string;
  age: number;
};

const jsonStr = '{"name": "Alice", "age": 30}';

const parsedData: ParseType = JSON.parse(jsonStr);
console.log(parsedData);
