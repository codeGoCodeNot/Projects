// unknown represenests something that we don't know what its;

const fn = (input: unknown) => {
  console.log(input);
};

fn("string");
fn(2);
fn(true);
fn({});
fn([]);
fn(() => {});

let z: unknown = "hello";

if (typeof z === "string") {
  console.log(z.toUpperCase());
}

let num1: unknown = 5;
let num2: unknown = 10;

if (typeof num1 === "number" && typeof num2 === "number") {
  console.log(num1 + num2);
}
