import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage";
import App from "./App";
import RecipeDetails from "./RecipeDetails";

function MainApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/recipes",
      element: <App />,
    },
    {
      path: "/recipes:id",
      element: <RecipeDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default MainApp;
