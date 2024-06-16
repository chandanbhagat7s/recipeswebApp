import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  function handleOpenMenu(e) {
    e.preventDefault();
    setOpen(open ? false : true);
  }
  return (
    <>
      <div className=" fixed z-[100] w-[100vw] flex border-b-2 border-black ">
        <div className="">
          <button
            onClick={handleOpenMenu}
            className=" font-bold  icon  mx-10 absolute top-5"
          >
            <CiMenuBurger className="text-2xl font-bold rounded-xl" />
          </button>
        </div>
        {open && (
          <div className="shadow-lg shadow-gray-300 bg-white  w-[100vw] flex   px-5 lg:px-16 py-3 lg:flex-row items-center  flex-col  md:flex-row space-y-2 md:space-y-0 ">
            <div className=" md:pl-5 logo w-2/2 md:w-1/3 font-bold">
              <span className="text-2xl text-black">F</span>
              <span className="text-2xl text-gray-500">o</span>
              <span className="text-2xl text-gray-500">o</span>
              <span className="text-2xl text-black">D</span>
            </div>
            <div className="serach w-2/2 md:w-1/3 flex justify-between">
              <input
                type="text"
                className="px-5 py-2 text-black rounded-full border border-black outline-none focus:ring-black w-full focus:border-2 bg-gray-100 focus:scale-110 shadow-md focus:shadow-lg "
                placeholder="Food name .."
              />
            </div>

            <nav className="flex space-x-2 w-2/2 md:w-1/3 justify-end text-sm md:text-md">
              <Link
                className="p-2 rounded text-black hover:bg-gray-500 hover:text-white font-bold border border-black cursor-pointer "
                to={"/home"}
              >
                Home
              </Link>

              <Link
                className="p-2 rounded text-black hover:bg-black hover:text-white font-bold border border-black cursor-pointer"
                to={"/createRecipe"}
              >
                Create Recipe
              </Link>
              <div className="p-2 rounded text-black hover:bg-blue-900 hover:text-white font-bold border border-black cursor-pointer">
                Profile
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
