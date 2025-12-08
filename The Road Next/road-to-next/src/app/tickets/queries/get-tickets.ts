import { initialTickets } from "@/data";
import { Ticket } from "@/features/ticket/type";

const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};

export default getTickets;
