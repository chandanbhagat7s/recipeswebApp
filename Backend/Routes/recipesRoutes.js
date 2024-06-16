

const express = require('express');
const { createRecipes, getRecipeById, getAllRecipe, uploadImages, resizeImage, getAllMyRecipe, getRecipeByIdAndUpdate, getRecipeByIdAndDelete } = require('../Controllers/recipeController');
const { isLoggedIn } = require('../Middlewares/isLoggedIn');

const recipesRoute = express.Router()



recipesRoute.get("/getAllRecipe", getAllRecipe)
recipesRoute.use(isLoggedIn)
recipesRoute.get("/getAllRecipe/:id", getAllMyRecipe)
recipesRoute.get("/getAllMyRecipe", createRecipes)
recipesRoute.get("/getRecipeById/:id", getRecipeById)
recipesRoute.patch("/getRecipeByIdAndUpdate/:id", getRecipeByIdAndUpdate)
recipesRoute.delete("/getRecipeByIdAndDelete/:id", getRecipeByIdAndDelete)
recipesRoute.post("/createRecipe", uploadImages, resizeImage, createRecipes)
// recipesRoute.post("/createRecipe", createRecipes)


module.exports = recipesRoute;



