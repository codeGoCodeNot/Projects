const setRange = (range: [x: number, y: number]) => {
  return `${range[0]} ${range[1]}`;
};
console.log(setRange([0, 10]));

//
const name = (fullName: [first: string, last: string]) =>
  console.log(`${fullName[0]} ${fullName[1]}`);
name(["Johnsen", "Berdin"]);

//
const goToLocation = (
  coordinates: [lat: number, lon: number, elevation?: number]
) => {
  return `${coordinates[0]} ${coordinates[1]} ${coordinates[2] ?? ""}`;
};
console.log(goToLocation([10, 20]));
