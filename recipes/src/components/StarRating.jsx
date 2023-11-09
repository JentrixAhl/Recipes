import React from "react";
import "./StarRating.css";

function StarRating({
  rating,
  onRatingClick,
  onRatingHover,
  onRatingHoverLeave,
}) {
  // Array to hold individual star elements
  const stars = [];

  // Loop to generate stars based on the provided rating
  for (let i = 1; i <= 5; i++) {
    // Determine the star class based on whether it's filled or empty
    const starClass = i <= rating ? "star-filled" : "star-empty";

    // Push individual star element with event handlers to the stars array
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

  // JSX structure for rendering the star rating component
  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
