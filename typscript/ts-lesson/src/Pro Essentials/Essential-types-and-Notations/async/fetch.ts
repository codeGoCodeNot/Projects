async function fetchData(): Promise<number> {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();
  console.log(data);
};

example();
