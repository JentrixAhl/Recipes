import React from "react";
import "./StarRating.css";

function StarRating({
  rating,
  onRatingClick,
  onRatingHover,
  onRatingHoverLeave,
}) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? "star-filled" : "star-empty";
    stars.push(
      <span
        key={i}
        className={`star ${starClass}`}
        onClick={() => onRatingClick(i)}
        onMouseEnter={() => onRatingHover(i)}
        onMouseLeave={onRatingHoverLeave}
      ></span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
