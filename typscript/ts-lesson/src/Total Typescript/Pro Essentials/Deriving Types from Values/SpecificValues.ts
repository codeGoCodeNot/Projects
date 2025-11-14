export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeMap = typeof programModeEnumMap;

type Group = ProgramModeMap["GROUP"];

const group: Group = programModeEnumMap.GROUP;
console.log(group);

type PlannedPrograms = ProgramModeMap[
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

const planned: PlannedPrograms = "plannedSelfDirected";
console.log(planned);

// access keys and values
type AllPrograms = (typeof programModeEnumMap)[keyof ProgramModeMap];
const allPrograms: AllPrograms = "group";
console.log(allPrograms);
