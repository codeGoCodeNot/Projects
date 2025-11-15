import React from "react";

export type Note = {
  id: string;
  description?: string;
  date: Date;
  priority: 1 | 2 | 3 | 4 | 5;
  isCompleted: boolean;
  title: string;
};

export type CreateDialogProps = {
  date: Date;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

export type ToolbarProps = {
  date: Date;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  handleSort: (order: "asc" | "desc") => void;
};
