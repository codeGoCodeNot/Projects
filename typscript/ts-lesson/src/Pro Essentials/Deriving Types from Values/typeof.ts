const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  } as const,
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  } as const,
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  } as const,
};

type Environment = keyof typeof configurations;

const development: Environment = "development";
console.log(configurations[development]);

const updated = { ...configurations[development], timeout: 2 };
console.log(updated);
