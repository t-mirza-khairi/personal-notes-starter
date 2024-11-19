import React from "react";

const SearchBar = (props) => {
  const { searchQuery, onSearchChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default SearchBar;
