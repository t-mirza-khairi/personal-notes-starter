import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NotesList from "../components/NotesList";
import NotesInput from "../components/NotesInput";
import NotesHeader from "../components/NotesHeader";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      formattedDate: showFormattedDate(new Date()),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          { id: +new Date(), title, body, archived: false },
        ], // Default archived state is false
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchieveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NotesHeader />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchieve={this.onArchieveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
