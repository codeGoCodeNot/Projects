const userIds = new Set<number>();

// TESTS

userIds.add(1);
userIds.add(2);
userIds.add(3);
console.log(userIds);

// Set unlike arrays it won't add duplicate items
const nameSet = new Set<string>(["Berdin"]);

nameSet.add("Johnsen");
nameSet.add("Mugen");
nameSet.add("Queenie");
nameSet.add("Queenie");
console.log(nameSet);
