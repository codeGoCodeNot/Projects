import "@total-typescript/ts-reset";
const users = ["matt", "sofia", "waqas"] as const;

users.includes("matt");

console.log(users.includes("bryan"));
