import React, { useState } from "react";
import "./App.css";
import RecipeDetails from "./RecipeDetails";
import recipes from "./data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./StarRating";

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
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(false);

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
    setViewingDetails(false); // Reset viewing details
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setViewingDetails(true);
  };

  return (
    <div className="container">
      <h1>Jentrix's kitchen</h1>

      {/* Search input and button */}
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
            <button onClick={() => handleViewDetails(recipe)}>
              View Details
            </button>
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
