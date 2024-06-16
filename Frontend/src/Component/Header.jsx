import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
      <div className=" fixed z-[100] w-[100vw] flex  ">
        <div className="">
          <button
            onClick={handleOpenMenu}
            className=" font-bold  icon  mx-10 absolute top-5"
          >
            <CiMenuBurger className="text-2xl font-bold rounded-xl" />
          </button>
        </div>
        {open && (
          <div className="shadow-lg shadow-gray-300 bg-white  w-[100vw] flex   px-5 lg:px-16 py-3 lg:flex-row items-center  flex-col  md:flex-row space-y-2 md:space-y-0 justify-around">
            <div className=" md:pl-5 logo w-2/2 md:w-1/4 font-bold">
              <span className="mx-2">how to make</span>
              <span className="text-3xl text-black">F</span>
              <span className="text-2xl text-gray-500">o</span>
              <span className="text-2xl text-gray-500">o</span>
              <span className="text-3xl text-black">D</span>
            </div>
            <div className="serach w-2/2 md:w-1/4 flex justify-between md:justify-start">
              <input
                type="text"
                className="px-5 py-2 text-black rounded-full border border-black outline-none focus:ring-black w-full focus:border-2 bg-gray-100 focus:scale-110 shadow-md focus:shadow-lg "
                placeholder="Food name .."
              />
            </div>

            <nav className="flex space-x-2 w-2/2 md:w-1/3  text-sm md:text-small ">
              <Link
                className="font-bold uppercase cursor-pointer p-2 text-gray-500 flex justify-cente items-center space-x-2 hover:scale-105 hover:text-black border-1 border-gray-300 border rounded-full focus:auto focus:bg-gray-300  "
                to={"/home"}
              >
                <p>Home</p>
                <CiHome className="text-2xl" />
              </Link>

              <Link
                className="font-bold uppercase cursor-pointer p-2 text-gray-500  flex justify-cente items-center space-x-2 hover:scale-105 hover:text-black border-1 border-gray-300 border rounded-full focus:bg-gray-300  "
                to={"/createRecipe"}
              >
                <p>Create Recipe</p>
                <MdOutlineCreateNewFolder className="text-2xl" />
              </Link>
              <Link
                className="font-bold uppercase cursor-pointer p-2 text-gray-500 flex justify-cente items-center space-x-2 hover:scale-105 hover:text-black border-1 border-gray-300 border rounded-full focus:bg-gray-300  "
                to={"/profile"}
              >
                <p> Profile</p>
                <CgProfile className="text-2xl" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
