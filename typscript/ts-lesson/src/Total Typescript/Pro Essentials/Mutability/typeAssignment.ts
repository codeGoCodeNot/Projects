type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {
  return attributes;
};

const buttonAttributes: ButtonAttributes = {
  type: "button",
};

const modifyButtons = (attributes: ButtonAttributes[]) => {
  return attributes;
};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  { type: "submit" },
];

console.log(modifyButton(buttonAttributes));
const result = modifyButtons(buttonsToChange);
result.map((i) => console.log(i));
