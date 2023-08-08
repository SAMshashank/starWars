import React from "react";

function Input({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" absolute p-2 border rounded-md right-10 text-black"
      />
    </div>
  );
}

export default Input;
