import React from "react";
import { books } from "../constants/mockData";
function Books() {
  return (
    <div>
      <div>
        {books.map((book) => (
          <p>{book.image}</p>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Books;
