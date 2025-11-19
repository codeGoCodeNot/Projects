type Person = {
  name: string;
  age: number;
  birthdate: Date;
};

const remapPerson = <K extends keyof Person>(key: K, value: Person[K]) => {
  if (key === "birthdate") {
    return new Date() as Person[K];
  }
  return value;
};

const result = remapPerson("age", 2);
console.log(result);
const birthDate = remapPerson("birthdate", new Date());
console.log(birthDate);
