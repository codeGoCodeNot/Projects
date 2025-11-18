// removing any

const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then((response) => response.json());
  return data;
};

const data = await fetchData<{ name: string }>(
  "https://swapi.py4e.com/api/people/1"
);

console.log(data);
