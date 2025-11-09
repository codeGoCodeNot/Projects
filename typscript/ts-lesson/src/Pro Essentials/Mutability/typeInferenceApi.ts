const fetchData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!result.ok) {
    return [new Error("Could not fetch data.")] as const;
  }

  const data = await result.json();
  console.log(data);
  return [undefined, data] as const;
};

fetchData();
