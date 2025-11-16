type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";
const goodbye: YouSayGoodbyeAndISayHello<"hello"> = "goodbye";
console.log(goodbye);

type NestedTernary<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;

const hello: NestedTernary<"goodbye"> = "hello";
console.log(hello);
