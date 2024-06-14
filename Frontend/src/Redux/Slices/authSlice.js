import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const signupForm = createAsyncThunk('/signup/user', async (data) => {


    try {
        let { name, email, password, mobile, address } = data;
        console.log("data to be submitted", data);


        const res = await axios.post('/api/v1/user/signup', {
            name, email, password, mobile, address
        }, {
            withCredentials: true
        })
        if (res) {
            console.log("res is ", res);
            return res


        }
    } catch (error) {

        return error.response;
    }


})

export const loginForm = createAsyncThunk('/login/user', async (data) => {


    try {
        let { email, password } = data;

        const res = await axios.post('/api/v1/user/login', {
            email, password
        }, {
            withCredentials: true
        })
        if (res) {
            return res


        }
    } catch (error) {

        return error.response;
    }


})

const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || '',
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
}
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(signupForm.fulfilled, (state, action) => {
            console.log(action);
            if (action.payload.data.status == "success") {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.data))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.data;
            }


        }).addCase(loginForm.fulfilled, (state, action) => {

            if (action.payload.data.status == "success") {
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                localStorage.setItem("data", JSON.stringify(action?.payload?.data?.data))
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.data;
            }


        })

    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer

















