interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const res = await fetch("https://swapi.py4e.com/api/people/1");
  const data: LukeSkywalker = await res.json();
  console.log(data.name, data.birth_year, data.mass);
  return data;
};

fetchLukeSkywalker();
