import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import errorSlice from "./Slices/errorSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        error: errorSlice

    },

})

export default store
















