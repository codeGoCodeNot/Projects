import { Calendar } from "./components/ui/calendar";
import { useEffect, useState } from "react";
import Container from "./components/container";
import Toolbar from "./components/Toolbar";
import type { Note } from "./components/types";
import NoteCard from "./components/NoteCard";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredNotes(() =>
      notes.filter((note) => note.date.toDateString() === date?.toDateString())
    );
  }, [notes, date]);

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
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
  };

  const handleCompleted = (checked: boolean, noteId: string) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId) {
          return { ...note, isCompleted: checked };
        } else {
          return note;
        }
      })
    );
  };

  return (
    <main>
      <Container>
        <div
          className="
        flex flex-col items-center gap-4 p-5 md:flex-row md:gap-10 md:items-start
        "
        >
          <section aria-labelledby="notes-heading">
            <header>
              <h1
                id="notes-heading"
                className="text-4xl font-medium text-center mb-20"
              >
                Notes
              </h1>
            </header>

            <aside
              aria-label="Calendar"
              className="w-[400px] h-[500px] p-5 md:p-0"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDay) => {
                  setDate(new Date(selectedDay!.getTime()));
                }}
                className="
                rounded-md border h-full w-full flex items-center justify-center
                
                "
              />
            </aside>
          </section>

          <section
            aria-label="Notes list"
            className="relative w-full flex items-center justify-center"
          >
            <div aria-hidden="false">
              <Toolbar
                date={date!}
                setNotes={setNotes}
                handleSort={handleSort}
              />
            </div>

            <div
              className="
            flex flex-col
            md:grid md:grid-cols-1 gap-4 mt-20
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
