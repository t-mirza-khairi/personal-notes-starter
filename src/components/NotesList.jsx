import React from "react";
import NotesItem from "./NotesItem";

const NotesList = (props) => {
  const { notes, onDelete, onArchieve, searchQuery } = props;

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2>Catatan Aktif</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {filteredNotes.length > 0 ? (
            <ul>
              {filteredNotes.map((note) => (
                <NotesItem
                  key={note.id}
                  id={note.id}
                  content={note.content}
                  onDelete={onDelete}
                  onArchieve={onArchieve}
                />
              ))}
            </ul>
          ) : (
            <p>Tidak ada catatan yang cocok dengan pencarian.</p>
          )}
        </div>
      ) : (
        <p className="notes-list__empty-message">Belum ada catatan</p>
      )}
    </>
  );
};

export default NotesList;
