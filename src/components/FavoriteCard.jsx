import React from "react";

function FavoriteCard({ data }) {
  const { title, image } = data;
  return <div className="favorite">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>;
}

export default FavoriteCard;
