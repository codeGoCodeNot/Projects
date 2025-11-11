// Set does not allow duplicate elements
// Set does not have length property

const userIds = new Set<number>();

console.log(userIds.add(1));
console.log(userIds.add(2));
console.log(userIds.add(3));

const stringSet = new Set<string>();
stringSet.add("Banana");
stringSet.add("Apple");
stringSet.add("Orange");
console.log(stringSet);

// checking if elements is in Set
console.log(stringSet.has("Banana"));

// deleting elements in Set
stringSet.delete("Orange");
console.log(stringSet);

// iterating over Set
const numSet = new Set<number>([1, 2, 3, 3, 4, 5, 6, 6]);
for (const num of numSet) {
  console.log(num);
}

// Converting a set to an Array
let mySet = new Set<number>([1, 2, 3, 4]);
console.log(mySet);
console.log(Array.from(mySet));
const newSet = [...mySet];
console.log(newSet);
