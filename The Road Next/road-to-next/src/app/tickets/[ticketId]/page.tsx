import Link from "next/link";

import PlaceHolder from "@/components/PlaceHolder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/Ticket-item";
import getTicket from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);

  if (!ticket)
    return (
      <PlaceHolder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to tickets</Link>
          </Button>
        }
      />
    );

  return (
    <>
      <div className="flex justify-center animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </>
  );
};

export default TicketPage;
