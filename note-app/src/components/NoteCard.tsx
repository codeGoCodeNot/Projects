import { cn } from "../lib/utils";
import type { Note } from "./types";
import { format } from "date-fns";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import React from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

type NoteCardProps = {
  note: Note;
  handleDelete: (note: Note) => void;
  handleCompleted: (checked: boolean, noteId: string) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  handleDelete,
  handleCompleted,
}) => {
  return (
    <Card
      className={cn(
        "w-[350px] h-[350px] flex justify-between border-2 relative",
        {
          "border-[#b91c1c] text-[#b91c1c]": note.priority === 5,
          "border-[#c2410c] text-[#c2410c]": note.priority === 4,
          "border-[#a16207] text-[#a16207]": note.priority === 3,
          "border-[#0f766e] text-[#0f766e]": note.priority === 2,
          "border-[#15803d] text-[#15803d]": note.priority === 1,
        }
      )}
    >
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{format(note.date, "do MMM, yyy")}</CardDescription>
        <CardAction>Card Action</CardAction>

        <div
          onClick={() => handleDelete(note)}
          className="w-[16px] absolute top-1 right-1 cursor-pointer"
        >
          <img src="/x.svg" alt="delete" className="w-full object-contain" />
        </div>
        <CardContent>
          <p>{note.description}</p>
        </CardContent>
      </CardHeader>
      <CardFooter className="flex flex-col items-start gap-y-2">
        <Label>Completed</Label>
        <Switch
          checked={note.isCompleted}
          onCheckedChange={(checked) => handleCompleted(checked, note.id)}
          className="cursor-pointer "
        />
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
