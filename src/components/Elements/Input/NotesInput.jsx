import React from "react";
import Button from "../Button";

const NotesInput = () => {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form>
        <p></p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul..."
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
        ></textarea>
        <Button />
      </form>
    </div>
  );
};

export default NotesInput;
