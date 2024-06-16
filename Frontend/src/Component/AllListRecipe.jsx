import React, { useEffect, useState } from "react";
import Foodcards from "./Foodcards";
import axios from "axios";

export default function AllListRecipe() {
  const [data, setData] = useState([]);
  async function getFoodData() {
    try {
      const res = await axios.get("/api/v1/recipes/getAllRecipe");
      console.log(res);
      res?.data?.rec?.length > 0 && setData(res.data.rec);
    } catch (error) {}
  }

  useEffect(() => {
    getFoodData();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-3 px-10 lg:px-0  ">
        {data?.map((el, i) => {
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
