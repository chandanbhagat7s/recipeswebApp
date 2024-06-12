import React from "react";

const Signup = ({ setTab }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Form Container */}
        <div className="rounded-xl -translate-y-20 md:-translate-y-0 bg-white z-[100] md:w-1/2 p-8 flex justify-around flex-col ">
          <h2 className="text-2xl font-bold text-center mb-6">Sign up !</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold">Name</label>
              <input
                type="text"
                className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">
                Email Address
              </label>
              <input
                type="email"
                className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type="password"
                className="border-b-2 border-red-300  w-full px-4 py-2 mt-2 rounded focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Login
            </button>
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
