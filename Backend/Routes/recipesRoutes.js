

const express = require('express');
const { createRecipes, getRecipeById, getAllRecipe } = require('../Controllers/recipeController');
const { isLoggedIn } = require('../Middlewares/isLoggedIn');

const recipesRoute = express.Router()



recipesRoute.get("/getAllRecipe", getAllRecipe)
recipesRoute.use(isLoggedIn)
recipesRoute.get("/getAllMyRecipe", createRecipes)
recipesRoute.get("/getRecipeById/:id", getRecipeById)
recipesRoute.post("/createRecipe", createRecipes)


module.exports = recipesRoute;


