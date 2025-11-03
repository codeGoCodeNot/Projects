type User = {
  name: string;
  age: number;
  hasJob: boolean;
  salary: number;
  hobby: string;
};

const passUser = (obj: User): string => {
  return `My name is ${obj.name}, I am ${obj.age} years old, and I ${
    obj.hasJob ? "have" : "do not have"
  } a job, 
my salary is only $${obj.salary}, my hobby is ${obj.hobby}.
            `;
};

console.log(
  passUser({
    name: "Johnsen",
    age: 26,
    hasJob: true,
    salary: 25_000,
    hobby: "coding",
  })
);
