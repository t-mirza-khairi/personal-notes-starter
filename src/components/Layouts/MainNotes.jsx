import React from "react";
import NotesInput from "../Elements/Input/NotesInput";
import NotesList from "../Elements/NotesList";

const MainNotes = () => {
  return (
    <div className="note_app_body">
      <NotesInput />
      <NotesList />
    </div>
  );
};

export default MainNotes;
