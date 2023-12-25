import React, { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import FavoriteCard from "./FavoriteCard";
function Books() {
  const [liked, setLiked] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <div className="mainContainer">
      <div className="booksContainer">
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      {!!liked.length && (
        <div className="bg-purple-400 h-fit rounded-[8px] flex flex-grow-[1] flex-shrink-[1] basis-0">
          <h4>Favorites </h4>

          {liked.map((book) => (
            <FavoriteCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
