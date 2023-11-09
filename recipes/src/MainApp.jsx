import React, { useState } from "react";
import HomePage from "./components/HomePage";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function MainApp() {
  // State variable to track the current page
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  // Switch statement to determine the content based on the current page
  switch (currentPage) {
    case "home":
      content = <HomePage onNavigate={handleNavigation} />;
      break;
    case "recipes":
      content = <App onNavigate={handleNavigation} />;
      break;
    case "recipeDetails":
      content = <RecipeDetails onNavigate={handleNavigation} />;
      break;
    case "register":
      content = <Register onNavigate={handleNavigation} />;
      break;
    default:
      content = <HomePage onNavigate={handleNavigation} />;
  }

  // JSX structure for rendering the main application with routing
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
