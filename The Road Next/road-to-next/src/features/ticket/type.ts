export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "DONE" | "OPEN" | "IN_PROGRESS";
};
