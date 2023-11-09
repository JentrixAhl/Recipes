import React from "react";
import "./RecipeDetails.css";
import data from "../data.json";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

// RecipeDetails component
function RecipeDetails({
  rating,
  recipe,
  onRatingClick,
  onRatingHover,
  onRatingHoverLeave,
}) {
  // Access the history object for navigation
  const history = useNavigate();

  // Get the "id" parameter from the route
  const { id } = useParams();

  // If no recipe is provided, display a message
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  // Check if the recipe is a salad recipe
  const isSaladRecipe = recipe.recipe.name === "Fresh Vegetable Salad";

  // Set the time label and value based on the recipe type
  const timeLabel = isSaladRecipe ? "Prep Time" : "Total Cooking Time";
  const timeValue = isSaladRecipe
    ? recipe.recipe.prepTime
    : recipe.recipe.totalAvarageCookingTime;

  // Handle the hover event on the star rating
  const handleRatingHover = (hoveredRating) => {
    console.log(`Hovered over star rating: ${hoveredRating}`);
  };

  // JSX structure for rendering the recipe details
  return (
    <div className="recipe-details">
      {/* StarRating component for displaying and interacting with the recipe rating */}
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
