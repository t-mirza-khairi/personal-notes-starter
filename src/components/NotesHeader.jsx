import React from "react";
import SearchBar from "./SearchBar";

const NotesHeader = (props) => {
  const { searchQuery, handleSearchQuery } = props;
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>
      <div className="text-area">
        <SearchBar
          searchQuery={searchQuery}
          onSearchQuery={handleSearchQuery}
        />
      </div>
    </nav>
  );
};

export default NotesHeader;
