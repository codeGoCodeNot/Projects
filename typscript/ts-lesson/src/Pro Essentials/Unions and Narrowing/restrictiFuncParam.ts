type Name = "Johnsen" | "Queenie" | "Mugen";

const nameFunc = (greet: string, name: Name) => console.log(`${greet} ${name}`);

nameFunc("Hello", "Johnsen");
nameFunc("Hello", "Mugen");
nameFunc("Hello", "Queenie");
