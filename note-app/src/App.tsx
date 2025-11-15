import { Calendar } from "./components/ui/calendar";
import { useEffect, useState } from "react";
import Container from "./components/container";
import Toolbar from "./components/Toolbar";
import type { Note } from "./components/types";
import NoteCard from "./components/NoteCard";

const STORAGE_KEY = "notes_v1";

function loadNotesFromStorage(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const notes = parsed.reduce<Note[]>((acc, item) => {
      if (typeof item !== "object" || item === null) return acc;
      const obj = item as Record<string, unknown>;

      const id =
        typeof obj.id === "string" && obj.id.trim() !== ""
          ? obj.id
          : `note-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

      const title = typeof obj.title === "string" ? obj.title : "";
      const description =
        typeof obj.description === "string" ? obj.description : "";

      let date: Date;
      if (typeof obj.date === "string" || typeof obj.date === "number") {
        const d = new Date(obj.date as string | number);
        date = Number.isNaN(d.getTime()) ? new Date() : d;
      } else {
        date = new Date();
      }

      const priority =
        typeof obj.priority === "number" &&
        [1, 2, 3, 4, 5].includes(obj.priority)
          ? (obj.priority as 1 | 2 | 3 | 4 | 5)
          : 1;

      const isCompleted = Boolean(obj.isCompleted);

      acc.push({
        id,
        title,
        description,
        date,
        priority,
        isCompleted,
      });

      return acc;
    }, []);

    return notes;
  } catch (err) {
    console.error("[loadNotesFromStorage] parse error", err);
    return [];
  }
}

function saveNotesToStorage(notes: Note[]) {
  try {
    const serializable = notes.map((n) => ({
      ...n,
      date: n.date instanceof Date ? n.date.toISOString() : String(n.date),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch (err) {
    console.error("[saveNotesToStorage] write failed", err);
  }
}

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [notes, setNotes] = useState<Note[]>(() => loadNotesFromStorage());

  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredNotes(() =>
      notes.filter((note) => note.date.toDateString() === date?.toDateString())
    );
  }, [notes, date]);

  // Keep storage in sync as a fallback (helps if other code changes notes)
  useEffect(() => {
    saveNotesToStorage(notes);
  }, [notes]);

  const handleSort = (order: "asc" | "desc") => {
    setFilteredNotes((prev) => {
      const copy = [...prev];
      copy.sort((a, b) =>
        order === "asc" ? a.priority - b.priority : b.priority - a.priority
      );
      return copy;
    });
  };

  const handleDelete = (note: Note) => {
    const next = notes.filter((item) => item.id !== note.id);
    setNotes(next);
    saveNotesToStorage(next);
  };

  // THIS is the function you asked to persist immediately on completed toggle
  const handleCompleted = (checked: boolean, noteId: string) => {
    const next = notes.map((note) =>
      note.id === noteId ? { ...note, isCompleted: checked } : note
    );
    setNotes(next);
    // persist immediately
    saveNotesToStorage(next);
  };

  return (
    <main>
      <Container>
        <div
          className="
        flex flex-col items-center gap-4 p-5 md:flex-row md:gap-10 md:items-start
        "
        >
          <section aria-labelledby="notes-heading" className="w-full md:w-auto">
            <header>
              <h1
                id="notes-heading"
                className="text-4xl font-medium text-center mb-8 md:mb-20"
              >
                Notes
              </h1>
            </header>

            <aside
              aria-label="Calendar"
              className="
              flex justify-center items-center  mx-auto py-5 h-[550px] w-[90%]
              md:w-[400px] md:p-0 overflow-visible"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDay) => {
                  setDate(new Date(selectedDay!.getTime()));
                }}
                className="
                  soft-3d
                  rounded-md bg-white border-2 border-slate-200
                  w-full md:h-full h-auto
                  overflow-auto
                  flex items-center justify-center
                "
              />
            </aside>
          </section>

          <section
            aria-label="Notes list"
            className="relative w-full flex items-center justify-center "
          >
            <div aria-hidden="false">
              <Toolbar
                date={date!}
                setNotes={(updater) => {
                  if (typeof updater === "function") {
                    const next = updater(notes);
                    setNotes(next);
                    saveNotesToStorage(next);
                  } else {
                    setNotes(updater as Note[]);
                    saveNotesToStorage(updater as Note[]);
                  }
                }}
                handleSort={handleSort}
              />
            </div>

            <div
              className="
            flex flex-col  pt-20
            md:grid md:grid-cols-1 gap-4 mt-6 md:mt-20 md:pt-0
            xl:grid-cols-2
            "
              aria-live="polite"
              role="list"
            >
              {filteredNotes.length > 0 ? (
                filteredNotes.map((notes, i) => (
                  <div role="listitem" key={i}>
                    <NoteCard
                      handleDelete={handleDelete}
                      note={notes}
                      handleCompleted={handleCompleted}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <h1 className="text-2xl">Make new notes</h1>
                </div>
              )}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default App;
