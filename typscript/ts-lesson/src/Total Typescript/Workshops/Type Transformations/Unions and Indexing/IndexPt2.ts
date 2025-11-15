const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type Obj = typeof frontendToBackendEnumMap;

type BackendModuleEnum = Obj[keyof Obj];

// type BackendModuleEnum =
//   (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap];

const backEndEnum: BackendModuleEnum = "SHARED_MODULE";
console.log(backEndEnum);

// create unions out of arrays values
const fruits = ["apple", "banana", "orange"] as const;

type Fruit = (typeof fruits)[number];
type AppleOrBanana = (typeof fruits)[0 | 1];
const appleOrBanana: AppleOrBanana[] = ["apple", "banana"];
console.log(appleOrBanana);

const appleFromFruit: Fruit = "apple";
console.log(appleFromFruit);
