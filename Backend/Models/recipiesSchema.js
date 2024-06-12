const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        minLenght: [3, "recipe name to be atlease 3 character"],
        maxLenght: [20, "recipe name to be not more then 20 character"],
        required: [true, "Please Enter name of recipe"],

    },
    shortDesc: {
        type: String,
        minLenght: [20, "recipe name to be atlease 20 character"],
        maxLenght: [60, "recipe name to be not more then 60 character"],
        required: [true, "Please Enter name of recipe"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        minLenght: [50, "recipe name to be atlease 20 character"],
        maxLenght: [200, "recipe name to be not more then 60 character"],
        required: [true, "Please Enter name of recipe"],
    },
    createdBy: {
        type: mongoose.mongo.ObjectId,
        required: [true, "recipe must have creator "],
        ref: "user"
    },
    steps: {
        type: Object,
        required: [true, "to create the recipe must contain some steps"]
    },
    ingredients: {
        type: [String],
        required: [true, "recipe must contain ingredients by which it is made "]

    }



})

const Recipe = mongoose.model("recipe", recipesSchema)

module.exports = Recipe;



