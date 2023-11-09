import React, { useState } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import recipesData from "./data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./components/StarRating";

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

function App() {
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(false);
  const [recipeRating, setRecipeRating] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const results = recipes.filter((recipe) =>
      recipe.recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    setViewingDetails(false);
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setViewingDetails(true);
  };
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

  const handleRatingHover = (rating) => {
    setRecipeRating(rating);
  };

  const handleRatingHoverLeave = () => {
    setRecipeRating(0);
  };

  const handleRegistration = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1>Jentrix's kitchen</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

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
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          slidesToSlide={3}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
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

export default App;
