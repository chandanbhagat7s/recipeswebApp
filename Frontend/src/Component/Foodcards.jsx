import React from "react";
import { useNavigate } from "react-router-dom";

export default function Foodcards({ data }) {
  const nevigate = useNavigate();
  return (
    <div className="flex justify-center items-center  flex-col lg:flex-row py-3">
      <div
        className={`relative h-[50vh] flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl  w-full md:w-1/3 lg:w-1/4 bg-[url(http://127.0.0.1:4000/cover/${data.coverImage})] bg-center bg-cover `}
      >
        {" "}
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
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={(e) => {
              nevigate("/makeit", { state: data });
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
