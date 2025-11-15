import React from "react";
import { Button } from "./ui/button";
import CreateDialog from "./CreateDialog";
import type { ToolbarProps } from "./types";

const Toolbar = ({ date, setNotes, handleSort }: ToolbarProps) => {
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

  return (
    <div
      className="w-full absolute inset-x-0 top-0 border-2 border-slate-200 rounded-lg 
    flex items-center justify-between px-6 py-1"
    >
      <CreateDialog date={date} setNotes={setNotes} />
      <Button
        variant={"outline"}
        onClick={() => {
          handleSort(sortOrder);
          setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        }}
        className="cursor-pointer"
      >
        Sort
      </Button>
    </div>
  );
};

export default Toolbar;
