import { initialTickets } from "@/data";

import { Ticket } from "../type";

const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => resolve(ticket || null));
};

export default getTicket;
