import React from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import FavoriteCard from "./FavoriteCard";
function Books() {
  return (
    <div className="mainContainer">
      <div className="booksContainer">
        {books.map((book) => (
          <BookCard key={book.id} data={book}/>
        ))}
      </div>
      <div>
        <FavoriteCard/>
      </div>
    </div>
  );
}

export default Books;
