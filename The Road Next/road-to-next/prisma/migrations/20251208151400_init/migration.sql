-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "status" "TicketStatus" NOT NULL DEFAULT 'OPEN';
