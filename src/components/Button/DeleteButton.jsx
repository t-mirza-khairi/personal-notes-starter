import React from "react";

const DeleteButton = (props) => {
  const { id, onDelete } = props;
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
