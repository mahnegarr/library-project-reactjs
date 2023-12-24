import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function BookCard({ data }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike((like) => !like);
  };
  return (
    <div className="bookCard">
      <img src={image} alt={title} />
      <div className="bookInfo">
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <div className="likeBtn">
        <button onClick={likeHandler}>
          <FaHeart color={like ? "red" : "e0e0e0"} fontSize="1.8rem" />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
