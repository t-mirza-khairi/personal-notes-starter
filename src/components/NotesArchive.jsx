import React from "react";
import NotesItem from "./NotesItem";

const NotesArchive = (props) => {
  const { onDelete, onArchieve, notes } = props;
  return (
    <>
      <h2>Arsip</h2>
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

export default NotesArchive;
