const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
} as const;

type TestingFrameworkKey = keyof typeof testingFrameworks;

type TestingFrameworkValue = (typeof testingFrameworks)[TestingFrameworkKey];

type TestingFrameworkLabel =
  (typeof testingFrameworks)[TestingFrameworkKey]["label"];

// key
const frameworks: TestingFrameworkKey = "vitest";
console.log(frameworks);

// value
const frameworksValue: TestingFrameworkValue = {
  label: "Jest",
};
console.log(frameworksValue);

const frameworksLabel: TestingFrameworkLabel = "Mocha";
console.log(frameworksLabel);
