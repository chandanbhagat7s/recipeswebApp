const Recipe = require("../Models/recipiesSchema");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const multer = require('multer')
const sharp = require('sharp')



// now we will decrease the quality and perform many operation 
const multerStorage = multer.memoryStorage();



// create filterObject
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {

        cb(null, true)
    } else {
        cb(new appError('please upload only image files', 400), false)

    }
}

exports.resizeImage = catchAsync(async (req, res, next) => {
    console.log(req.body);
    console.log("file is ", req.files);
    if (!req.files.coverImage || !req.files.Images) {
        return next(new appError("please upload a file", 400))
    }


    // cover image
    req.body.coverImage = `${req.body.name}-${Date.now()}-cover.jpeg`
    await sharp(req.files.coverImage[0].buffer).toFormat('jpeg').toFile(`public/cover/${req.body.coverImage}`)

    // images
    req.body.Images = []
    req.files.Images &&
        await Promise.all(req.files.Images.map(async (el, i) => {
            const fileName = `${req.body.name}-${Date.now()}-${i}.jpeg`
            await sharp(el.buffer).toFormat('jpeg').toFile(`./public/images/${fileName}`)
            req.body.Images.push(fileName);
        }))
    console.log("exit");

    next()


})


// destination(for saving files) of multer package 
const uploads = multer(
    {
        storage: multerStorage,
        fileFilter: multerFilter
    }
)

// middleware for uploding images


exports.uploadImages = uploads.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'Images', maxCount: 3 }
])




exports.createRecipes = catchAsync(async (req, res, next) => {

    const {
        name,
        shortDesc,
        description,
        steps,
        ingredients,
        coverImage,
        Images
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
        coverImage,
        images: Images

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

    console.log(rec);
    if (rec?.recipies?.length == 0) {
        return res.status(200).send({
            status: "success",
            message: "no recipe found ",
            rec: rec

        })
    }

    res.status(200).send({
        status: "success",
        message: "recipe fetched successfully ",
        rec: rec
    })
})

