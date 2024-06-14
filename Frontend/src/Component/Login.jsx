import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { error, success, warning } from "../Redux/Slices/errorSlice";
import { loginForm } from "../Redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setTab }) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      return dispatch(warning({ message: "please enter all the details" }));
    }
    const res = await dispatch(loginForm(data));
    console.log(res);
    if (res?.payload?.data?.status == "success") {
      dispatch(success({ message: "Logged in successfully " }));
      nevigate("/home");
    } else {
      dispatch(error({ message: res?.payload?.data?.msg }));
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Form Container */}
        <div className="rounded-xl -translate-y-20 md:-translate-y-0 bg-white z-[100] md:w-1/2 p-8 flex justify-around flex-col ">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold">
                Email Address
              </label>
              <input
                name="email"
                onChange={handleChange}
                value={data.email}
                type="email"
                className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                name="password"
                onChange={handleChange}
                value={data.password}
                type="password"
                className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Login
            </button>
            <div
              className="mt-2 text-sm text-red-400 cursor-pointer"
              onClick={() => setTab(1)}
            >
              do not have an account ?
            </div>
          </form>
        </div>
        {/* Image Container */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
