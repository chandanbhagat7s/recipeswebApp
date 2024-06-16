import { useSelect } from "@material-tailwind/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteItem } from "./DeleteItem";

export default function Foodcards({ data }) {
  const auth = useSelector((state) => state.auth);
  const [delD, setDelD] = useState(false);
  const nevigate = useNavigate();
  return (
    <div className="flex justify-center items-center  flex-col lg:flex-row py-3">
      <div className={`  `}>
        <img
          src={`http://127.0.0.1:4000/cover/${data.coverImage}`}
          alt=""
          className="rounded-xl bg-cover h-64"
        />
      </div>
      <div className=" w-2/2 lg:w-1/2 bg-gray-200 rounded-xl">
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {data.name}
          </h4>
          <p className="block mt-3 text-gray-500 font-sans text-sm md:text-xl lg:text-xl antialiased font-normal leading-relaxed ">
            {data.shortDesc}
          </p>
        </div>
        <div className="p-6 pt-0 flex space-x-2">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={(e) => {
              nevigate("/makeit", { state: data });
            }}
          >
            Read More
          </button>

          {data.createdBy._id == auth.data._id &&
            location.pathname.includes("/profile") && (
              <>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                  onClick={(e) => {
                    nevigate("/updateRecipe", { state: data });
                  }}
                >
                  Update It
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                  onClick={(e) => {
                    setDelD(true);
                  }}
                >
                  delete It
                </button>
              </>
            )}
        </div>
      </div>
      {delD && (
        <DeleteItem
          data={"Do you want to delete this recipe"}
          setDelD={setDelD}
          id={data._id}
        />
      )}
    </div>
  );
}
