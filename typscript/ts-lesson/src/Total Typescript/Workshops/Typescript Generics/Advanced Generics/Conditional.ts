const youSayGoodByeIsHello = <T extends "hello" | "goodbye">(greet: T) =>
  (greet === "hello" ? "goodbye" : "hello") as T extends "hello"
    ? "goodbye"
    : "hello";

console.log(youSayGoodByeIsHello("goodbye"));
