import Link from "next/link";

import PlaceHolder from "@/components/PlaceHolder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

const NotFound = () => {
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
};

export default NotFound;
