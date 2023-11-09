import React from "react";
import "./RecipeDetails.css";
import data from "../data.json";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function RecipeDetails({
  rating,
  recipe,
  onRatingClick,
  onRatingHover,
  onRatingHoverLeave,
}) {
  const history = useNavigate();
  const { id } = useParams();
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const isSaladRecipe = recipe.recipe.name === "Fresh Vegetable Salad";
  const timeLabel = isSaladRecipe ? "Prep Time" : "Total Cooking Time";
  const timeValue = isSaladRecipe
    ? recipe.recipe.prepTime
    : recipe.recipe.totalAvarageCookingTime;

  const handleRatingHover = (hoveredRating) => {
    console.log(`Hovered over star rating: ${hoveredRating}`);
  };

  return (
    <div className="recipe-details">
      <StarRating
        rating={rating}
        onRatingClick={onRatingClick}
        onRatingHover={onRatingHover}
        onRatingHoverLeave={onRatingHoverLeave}
      />
      <div className="recipe-header">
        <h2>{recipe.recipe.name}</h2>
        <button onClick={() => history(-1)}>Go Back</button>
      </div>
      <img
        src={recipe.recipe.image}
        alt={recipe.recipe.name}
        className="recipe-image"
      />
      <p className="recipe-description">{recipe.recipe.description}</p>
      <div className="ingredients-list">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions-list">
        <h3>Instructions:</h3>
        <ol>
          {recipe.recipe.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </ol>
      </div>
      <p className="servings-time">
        Servings: {recipe.recipe.servings} | {timeLabel}: {timeValue}
      </p>
    </div>
  );
}

export default RecipeDetails;
