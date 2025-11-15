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

const CreateDialog = ({ date, setNotes }: CreateDialogProps) => {
  const [note, setNote] = React.useState<Note>({
    date: date,
    priority: 1,
    title: "",
    id: generateUniqueId(),
    isCompleted: false,
  });

  React.useEffect(() => {
    setNote((prev) => ({ ...prev, date }));
  }, [date]);

  const createNode = () => {
    if (note.title === "") {
      return;
    }
    setNotes((prev) => [...prev, note]);
    setNote({
      date: date,
      priority: 1,
      title: "",
      id: generateUniqueId(),
      isCompleted: false,
    });
  };

  const setSliderValue = (v: number[]) => {
    setNote((prev) => ({
      ...prev,
      priority: v[0] === 0 ? 1 : (v[0] as 1 | 2 | 3 | 4 | 5),
    }));
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
              onChange={(e) =>
                setNote((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <Label>Description</Label>
            <Input
              value={note.description}
              onChange={(e) =>
                setNote((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <Label>Priority</Label>
            <Slider
              defaultValue={[1]}
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
