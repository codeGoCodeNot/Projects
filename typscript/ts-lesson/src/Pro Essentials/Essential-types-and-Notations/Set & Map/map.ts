type User = {
  name: string;
  age: number;
};

const userMap = new Map<number, User>();

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });

console.log(userMap);

userMap.forEach((value, key) =>
  console.log(`key: ${key} value: ${JSON.stringify(value)}`)
);

console.log(userMap.get(2));
