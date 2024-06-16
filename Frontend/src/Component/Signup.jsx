import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupForm } from "../Redux/Slices/authSlice";
import { error, info, success, warning } from "../Redux/Slices/errorSlice";
import { useNavigate } from "react-router-dom";

const Signup = ({ setTab }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

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
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.mobile ||
      !data.address
    ) {
      return dispatch(warning({ message: "please enter all the details" }));
    }
    const res = await dispatch(signupForm(data));
    //console.log("res is ", res);
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
        {/* Image Container */}
        <div className="md:w-1/2">
          <img
            src={`${
              step == 1
                ? "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
                : "https://img.freepik.com/free-photo/fresh-vegetables-pasta_23-2147694283.jpg"
            } `}
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Form Container */}
        <div className="rounded-xl -translate-y-20 md:-translate-y-0 bg-white z-[100] md:w-1/2 p-8 flex justify-around flex-col ">
          <h2 className="text-2xl font-bold text-center mb-6">Sign up !</h2>
          <form className="space-y-4 flex flex-col">
            {step == 1 && (
              <>
                <p className="text-small text-gray-400">1/2</p>
                <div>
                  <label className="block text-gray-700 font-bold">Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    type="text"
                    className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
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
                  <label className="block text-gray-700 font-bold">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    type="password"
                    className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-1/4 bg-zinc-200  py-2 rounded-md  text-2xl font-bold self-end"
                >
                  &rarr;
                </button>
              </>
            )}

            {step == 2 && (
              <>
                <p className="text-small text-gray-400">2/2</p>

                <div>
                  <label className="block text-gray-700 font-bold">
                    Mobile
                  </label>
                  <input
                    name="mobile"
                    onChange={handleChange}
                    value={data.mobile}
                    type="text"
                    className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Address
                  </label>
                  <input
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    type="text"
                    className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
              </>
            )}

            {step == 2 && (
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/4 bg-zinc-200  py-2 rounded-md  text-2xl font-bold "
                >
                  &larr;
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-2/4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                >
                  Sign in!
                </button>
              </div>
            )}
            <div
              className="mt-2 text-sm text-red-400 cursor-pointer"
              onClick={() => setTab(0)}
            >
              have an account login?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
