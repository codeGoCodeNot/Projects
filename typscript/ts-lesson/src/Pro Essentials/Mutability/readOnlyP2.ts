type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {
  return attributes;
};

const buttonAttributes = {
  type: "button" as const,
};

console.log(modifyButton(buttonAttributes));
