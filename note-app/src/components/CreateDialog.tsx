import React from "react";
import type { CreateDialogProps, Note } from "./types";
import { generateUniqueId } from "../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const CreateDialog: React.FC<CreateDialogProps> = ({ date, setNotes }) => {
  const [note, setNote] = React.useState<Note>({
    date: date ?? new Date(),
    priority: 1,
    title: "",
    id: generateUniqueId(),
    isCompleted: false,
    description: "",
  });

  React.useEffect(() => {
    setNote((prev) => ({ ...prev, date: date ?? new Date() }));
  }, [date]);

  const createNode = () => {
    const title = note.title?.trim() ?? "";
    if (title === "") return;

    const newNote: Note = {
      ...note,
      title,
      date: note.date ?? new Date(),
      id: generateUniqueId(),
    };

    setNotes((prev) => {
      const next = [...prev, newNote];
      return next;
    });

    // reset form
    setNote({
      date: date ?? new Date(),
      priority: 1,
      title: "",
      id: generateUniqueId(),
      isCompleted: false,
      description: "",
    });
  };

  const setSliderValue = (v: number[]) => {
    const p = (v?.[0] ?? 1) as number;
    const priority = p === 0 ? 1 : (p as 1 | 2 | 3 | 4 | 5);
    setNote((prev) => ({ ...prev, priority }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Note.</DialogTitle>
          <DialogDescription className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              value={note.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNote((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <Label>Description</Label>
            <Input
              value={note.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNote((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <Label>Priority</Label>
            <Slider
              value={[note.priority]}
              onValueChange={setSliderValue}
              max={5}
              step={1}
              className="cursor-pointer"
            />
            <DialogClose asChild>
              <Button onClick={createNode} className="cursor-pointer">
                Create
              </Button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
