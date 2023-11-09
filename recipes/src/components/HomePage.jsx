import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Jentrix's Kitchen</h1>
      <p>
        Discover delicious recipes from my kitchen. We have the best in the
        region.
      </p>
      <p>For more information, click on the link bellow to see what we have.</p>
      <p>You can give us a call or whatsapp on:- Tel. 0707 567 567</p>
      <p>Or visit us at LongStreet 3</p>
      <Link to="/recipes" className="link-button">
        View Recipes
      </Link>
      <form action="">
        <label htmlFor="">Email adress</label>
        <input type="email" />
        <button type="submit">Subscribe to our newsletter</button>
      </form>
    </div>
  );
}

export default HomePage;
