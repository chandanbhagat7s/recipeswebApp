const Recipe = require("../Models/recipiesSchema");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createRecipes = catchAsync(async (req, res, next) => {

    const {
        name,
        shortDesc,
        description,
        steps,
        ingredients,
    } = req.body;
    if (name, !shortDesc, !description, !steps, !ingredients) {
        return next(new appError("please enter all the fields to create recipe", 400))
    }


    const rec = await Recipe.create({
        name,
        shortDesc,
        description,
        createdBy: req.user.id,
        steps,
        ingredients,

    })
    if (!rec) {
        return next(new appError("something went wrong", 400))
    }


    res.status(200).send({
        status: "success",
        message: "recipe created successfully "
    })
})



exports.getAllMyRecipe = catchAsync(async (req, res, next) => {


    const rec = await User.findById(req.user._id).populate("recipies")


    if (rec.recipies.length == 0) {
        return res.status(200).send({
            status: "success",
            message: "no recipe found ",

        })
    }

    res.status(200).send({
        status: "success",
        message: "recipe fetched successfully ",
        rec: res.recipies
    })
})
exports.getRecipeById = catchAsync(async (req, res, next) => {


    const recipeId = req.user.recipies
    const rec = await Recipe.findById(recipeId)


    if (!rec) {
        return next(new appError(`no recipe found with ${recipeId}`, 400))
    }

    res.status(200).send({
        status: "success",
        message: "recipe fetched successfully ",
        rec: res.recipies
    })
})




exports.getAllRecipe = catchAsync(async (req, res, next) => {


    const rec = await Recipe.find({})


    if (rec.recipies.length == 0) {
        return res.status(200).send({
            status: "success",
            message: "no recipe found ",
            rec: rec

        })
    }

    res.status(200).send({
        status: "success",
        message: "recipe fetched successfully ",
        rec: res.recipies
    })
})

