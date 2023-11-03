import React from "react";
import "./RecipeDetails.css";
import data from "./data.json";
import { useParams } from "react-router-dom";

function RecipeDetails({ recipe, onClose }) {
  const { id } = useParams("id");

  const recipes = data.find((item) => {
    item.id === parseInt(id);
  });

  if (!recipe) {
    return <div>recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <h2>{recipe.recipe.name}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <img src={recipe.recipe.image} alt={recipe.recipe.name} />
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
        Servings: {recipe.recipe.servings} | Total Cooking Time:{" "}
        {recipe.recipe.totalAvarageCookingTime}
      </p>
    </div>
  );
}

export default RecipeDetails;
