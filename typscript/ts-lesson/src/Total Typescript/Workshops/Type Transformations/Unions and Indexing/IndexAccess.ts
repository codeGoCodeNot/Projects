// index access

const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
  Obj: {
    name: "Johnsen",
  },
} as const;

type FakeDataDefaults = typeof fakeDataDefaults;
type StringType = FakeDataDefaults["String" | "ID"];
const stringType: StringType = "Default string";
console.log(stringType);

type ObjType = FakeDataDefaults["Obj"]["name"];
const objType: ObjType = "Johnsen";
console.log(objType);

// index access union
const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type IndividualProgram = Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>;

const individualProgram: (typeof programModeEnumMap)[IndividualProgram] =
  "plannedSelfDirected";
console.log(individualProgram);
