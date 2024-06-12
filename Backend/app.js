
const express = require('express');
const mongoose = require('mongoose');
const env = require("dotenv");
const globalErrorHandler = require('./utils/globalErrorHandler');
const userRouter = require('./Routes/userRoutes');
const recipesRoute = require('./Routes/recipesRoutes');

const app = express()
env.config({ path: "./config.env" })



const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, {

})
    .then((con) => {
        console.log("database connected");
    }).catch(e => {
        console.log("not connected", e);
    })



app.use('/api/v1/user', userRouter)
app.use('/api/v1/recipes', recipesRoute)

app.use(globalErrorHandler)


app.listen(PORT, () => {
    console.log("server started at port ", PORT);
})


