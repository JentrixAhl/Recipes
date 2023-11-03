import React from "react";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? "star-filled" : "star-empty";
    stars.push(<span key={i} className={`star ${starClass}`}></span>);
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
