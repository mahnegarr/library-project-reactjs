import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function Search({ search, setSearch, changeHandler }) {
  return (
    <div className="searchBox">
      <input
        type="search"
        name=""
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button className="searchIcon" onClick={changeHandler}>
        <IoSearch fontSize="1.5rem" />
      </button>
    </div>
  );
}

export default Search;
