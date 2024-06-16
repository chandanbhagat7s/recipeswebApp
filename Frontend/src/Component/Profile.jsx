import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Foodcards from "./Foodcards";

export default function Profile() {
  const { data } = useSelector((state) => state.auth);
  const [recipe, setRecipe] = useState([]);
  async function getFoodData() {
    try {
      const res = await axios.get(`/api/v1/recipes/getAllRecipe/${data._id}`);
      // console.log(res);
      res?.data?.rec?.length > 0 && setRecipe(res.data.rec);
    } catch (error) {
      //console.log("error");
    }
  }

  useEffect(() => {
    getFoodData();
  }, []);
  //console.log(data);
  return (
    <>
      <div className="w-2/3 flex flex-col justify-center">
        <div className="profile flex flex-col w-2/2">
          <p className="name text-2xl font-bold p-2 text-center">{data.name}</p>
          <p className="address text-xl text-gray-500 text-center">
            {data.email}
          </p>

          <p className="text-2xl my-5 font-bold px-3    ">RECIPES</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 px-10 lg:px-0 w-2/2 justify-center   ">
        {recipe.length > 0 &&
          recipe?.map((el, i) => {
            return (
              <>
                <Foodcards data={el} />
              </>
            );
          })}
      </div>
    </>
  );
}
