import React from "react";
import NotesItem from "./NotesItem";

const NotesList = (props) => {
  const { notes, onDelete, onArchieve } = props;
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchieve={onArchieve}
            {...note}
          />
        ))}
      </div>
    </>
  );
};

export default NotesList;
