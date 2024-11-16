import React from "react";

const NotesHeader = () => {
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>

      <div className="text-area">
        <input type="text" placeholder="Cari catatan" className="input" />
      </div>
    </nav>
  );
};

export default NotesHeader;
