import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  // JSX structure for rendering the home page content
  return (
    <div className="homepage-container">
      <h1>Welcome to Jentrix's Kitchen</h1>

      {/* Link to view recipes */}
      <Link to="/recipes" className="link-button">
        Recipes
      </Link>

      {/* Link to information about us */}
      <Link to="/aboutUs" className="link-button">
        About us
      </Link>

      {/* Subscription form */}
      <form action="">
        <label htmlFor="" className="email-label">
          Email adress
        </label>
        <input type="email" />
        <button type="submit">Subscribe to our newsletter</button>
      </form>
    </div>
  );
}

export default HomePage;
