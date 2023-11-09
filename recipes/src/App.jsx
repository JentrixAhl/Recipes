// Import necessary dependencies and components
import React, { useState } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import recipesData from "./data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./components/StarRating";

// Responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Main App component
function App() {
  // State variables using the useState hook
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(false);
  const [recipeRating, setRecipeRating] = useState(0);

  // User registration form state variable
  const [email, setEmail] = useState("");

  // Function to handle image click and set the selected recipe
  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle input change in the search bar
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search button click and filter recipes based on the search query
  const handleSearch = () => {
    const results = recipes.filter((recipe) =>
      recipe.recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    setViewingDetails(false);
  };

  // Function to handle view details button click and display recipe details
  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setViewingDetails(true);
  };

  // Function to handle click on star rating and update the recipe's rating
  console.log(selectedRecipe);
  const handleRatingClick = (rating) => {
    if (selectedRecipe) {
      const updatedRecipe = { ...selectedRecipe };
      updatedRecipe.recipe.rating = rating;

      const updatedRecipes = [...recipes];
      const index = updatedRecipes.findIndex(
        (recipe) => recipe.id === selectedRecipe.id
      );

      updatedRecipes[index] = updatedRecipe;

      setRecipes(updatedRecipes);
      setSelectedRecipe(updatedRecipe);
    }
  };

  // Function to handle hover on star rating and update the displayed rating
  const handleRatingHover = (rating) => {
    setRecipeRating(rating);
  };

  // Function to handle hover leave on star rating and reset the displayed rating
  const handleRatingHoverLeave = () => {
    setRecipeRating(0);
  };

  // Function to handle user registration form submission
  const handleRegistration = () => {
    console.log("Email:", email);

    setEmail("");
  };

  // JSX structure for rendering the application
  return (
    <div className="container">
      <h1>Jentrix's kitchen</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Conditional rendering based on whether viewing details or showing search results or carousel */}
      {viewingDetails ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setViewingDetails(false)}
          rating={recipeRating}
          onRatingClick={handleRatingClick}
          onRatingHover={handleRatingHover}
          onRatingHoverLeave={handleRatingHoverLeave}
        />
      ) : searchResults.length > 0 ? (
        searchResults.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.name}
              onClick={() => handleViewDetails(recipe)}
              className="recipe-image"
            />
            <h2 className="recipe-name">{recipe.recipe.name}</h2>
            <p className="recipe-description">{recipe.recipe.description}</p>
            <StarRating
              rating={recipe.recipe.rating}
              onRatingClick={handleRatingClick}
              onRatingHover={handleRatingHover}
              onRatingHoverLeave={handleRatingHoverLeave}
            />
          </div>
        ))
      ) : (
        // Rendering carousel if no search results
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          slidesToSlide={1}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* Mapping over recipes to display in carousel */}
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.name}
                onClick={() => handleViewDetails(recipe)}
                className="recipe-image"
              />
              <h2 className="recipe-name">{recipe.recipe.name}</h2>
              <p className="recipe-description">{recipe.recipe.description}</p>
              <StarRating rating={recipe.recipe.rating} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

// Exporting the App component as the default export
export default App;
