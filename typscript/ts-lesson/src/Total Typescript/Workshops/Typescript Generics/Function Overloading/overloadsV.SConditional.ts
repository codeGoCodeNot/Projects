function youSayGoodbyeISayHello(greeting: "hello"): "goodbye";
function youSayGoodbyeISayHello(greeting: "goodbye"): "hello";
function youSayGoodbyeISayHello(greeting: "goodbye" | "hello") {
  return greeting === "goodbye" ? "hello" : "goodbye";
}

const hello = youSayGoodbyeISayHello("goodbye");
console.log(hello);
