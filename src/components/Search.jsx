import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="searchBox">
      <input type="search" name="" placeholder="Search title" id="" />
      <button className="searchIcon">
        <IoSearch fontSize="1.5rem"/>
      </button>
    </div>
  );
}

export default Search;
