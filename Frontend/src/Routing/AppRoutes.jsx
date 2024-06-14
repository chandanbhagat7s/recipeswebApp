import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "../Component/LoginSignup";
import Home from "../Layout/Home";
import CreateRecipe from "../Component/CreateRecipe";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
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
