import React, { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import FavoriteCard from "./FavoriteCard";
import Search from "./Search";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const changeHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks)
    }else{
        setBooks(bookData)
    }
    
  };
  return (
    <>
      <div className="searchBox">
        <Search search={search} setSearch={setSearch} changeHandler={changeHandler} />
      </div>
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
          <div className="bg-red-700  w-[240px] ml-4 p-2 h-fit rounded-[8px] ">
            <h4 className="pb-2 font-semibold">Favorites </h4>

            {liked.map((book) => (
              <FavoriteCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
