import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "../Component/LoginSignup";
import Home from "../Layout/Home";
import CreateRecipe from "../Component/CreateRecipe";
import Foodcards from "../Component/Foodcards";
import AllListRecipe from "../Component/AllListRecipe";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route
          path="/home"
          element={
            <Home>
              <AllListRecipe />
            </Home>
          }
        />
        <Route
          path="/createRecipe"
          element={
            <Home>
              <CreateRecipe />
            </Home>
          }
        />
      </Routes>
    </>
  );
}
