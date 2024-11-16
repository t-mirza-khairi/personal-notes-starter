import React from "react";
import NotesItemTitle from "./NotesItemTitle";
import NotesItemDate from "./NotesItemDate";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./Button/DeleteButton";
import ArchieveButton from "./Button/ArchieveButton";
import { showFormattedDate } from "../utils";

const NotesItem = ({ title, body, id, onDeleteHandler, onArchieve }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemTitle title={title} />
        <NotesItemDate date={showFormattedDate(new Date())} />
        <NotesItemBody body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDeleteHandler={onDeleteHandler} />
        <ArchieveButton id={id} onArchieve={onArchieve} />
      </div>
    </div>
  );
};

export default NotesItem;
