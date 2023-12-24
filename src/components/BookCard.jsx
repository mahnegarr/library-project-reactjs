import React from "react";
import { FaHeart } from "react-icons/fa";

function BookCard({ data: { title, author, image, language, pages } }) {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
            <span>{language}</span>
            <span>{pages} pages</span>
        </div>
      </div>
      <button><FaHeart /></button>
    </div>
  );
}

export default BookCard;
