import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
//import data from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./App.css";

type Note = {
  id: string,
  body: string
}

function App() {
  const [notes, setNotes] = useState<Array<Note>>(localStorage.getItem("notes")===null? [] : JSON.parse(localStorage.getItem("notes") as string));
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  }, [])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "",
    };
    console.log(newNote.id);
    setNotes((prevNotes) => [...prevNotes,newNote]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text: string) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNode(){
    return notes.find(
      note => note.id === currentNoteId
    ) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0
        ?
        <Split
          sizes = {[30,70]}
          direction = "horizontal"
          className="split"
        >
          <Sidebar
            notes={notes}
            currentNote={findCurrentNode()}
            setCurrentNoteId={setCurrentNoteId as (id:string)=>void}
            newNote={createNewNote}
          />
          {
            currentNoteId &&
            notes.length > 0 &&
            <Editor
              currentNote={findCurrentNode()}
              updateNote={updateNote}
          />
          }
        </Split>
        :
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button
            className="first-note"
            onClick={createNewNote}
          >
            Create One Now
          </button>
        </div>
      }
    </main>
  );
}

export default App;