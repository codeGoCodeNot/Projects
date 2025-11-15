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
        "soft-3d w-[350px] max-w-full min-h-[280px] flex flex-col box-border relative overflow-hidden p-4",
        {
          "text-red-900": note.priority === 5,
          "text-orange-900": note.priority === 4,
          "text-amber-900": note.priority === 3,
          "text-teal-900": note.priority === 2,
          "text-green-900": note.priority === 1,
        }
      )}
    >
      <div
        onClick={() => handleDelete(note)}
        className="w-4 h-4 absolute top-3 right-3 cursor-pointer z-20"
        aria-label="Delete note"
        role="button"
      >
        <img
          src="/x.svg"
          alt="delete"
          className="w-full h-full object-contain"
        />
      </div>

      <CardHeader className="flex-none pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="break-words">{note.title}</CardTitle>
            <CardDescription className="text-base">
              {format(note.date, "do MMM, yyy")}
            </CardDescription>
          </div>
          <CardAction className="ml-auto font-semibold">Card Action</CardAction>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto">
        <p className="whitespace-pre-wrap break-words text-[inherit]">
          {note.description}
        </p>
      </CardContent>

      <CardFooter className="flex-none mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Label>Completed</Label>
        </div>
        <div>
          <Switch
            checked={note.isCompleted}
            onCheckedChange={(checked) => handleCompleted(checked, note.id)}
            className="cursor-pointer"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
