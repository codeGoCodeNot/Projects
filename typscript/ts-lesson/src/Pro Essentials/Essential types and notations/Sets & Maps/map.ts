// ts Map is a collection that stores key-value pairs,
// where keys and values can be of any type.

// creating a Map
let myMap = new Map<string, number>();
// add entries to map
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

myMap.forEach((val, key) => console.log(`key: ${key}, value: ${val}`));

type User = {
  name: string;
  age: number;
};

const userMap = new Map<number, User>();
userMap.set(1, { name: "Johnsen", age: 26 });
userMap.forEach((value, key) =>
  console.log(`key: ${key}, value: name:${value.name} age:${value.age}`)
);
console.log(userMap.get(1));
