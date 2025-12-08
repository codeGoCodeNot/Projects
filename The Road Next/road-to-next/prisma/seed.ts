import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { Prisma, PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const tickets: Prisma.TicketCreateInput[] = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
