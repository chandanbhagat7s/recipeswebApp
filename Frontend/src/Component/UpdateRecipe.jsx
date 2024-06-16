import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { info, warning } from "../Redux/Slices/errorSlice";

export default function UpdateRecipe() {
  const location = useLocation();
  const { state } = location;

  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [steps, setSteps] = useState([...state.steps]);
  const [data, setData] = useState({
    ...state,
  });
  function addInputSteps(e) {
    e.preventDefault();
    const dataSteps = Number(data.steps);
    //console.log(Array(data.steps).fill(""), data.steps);
    if (steps.length == 0) {
      setSteps(Array(dataSteps).fill(""));
    } else {
      let arr = Array(dataSteps).fill("");
      if (steps.length <= dataSteps) {
        for (let index = 0; index < steps.length; index++) {
          arr[index] = steps[index];
        }
      } else {
        //console.log("data is ", steps.length);
        for (let index = 0; index < dataSteps; index++) {
          arr[index] = steps[index];
        }
      }
      setSteps([...arr]);
    }
  }
  function handleStepChange(e) {
    const { name, value } = e.target;
    //console.log("name and value", name, value);

    let obj = [...steps].map((el, i) => {
      if (i == name) {
        el = value;
      }
      return el;
    });
    //console.log(obj);
    setSteps(obj);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmitItems() {
    // console.log(data);
    // console.log(steps);

    let updatingData = {
      ...data,
      steps: steps,
    };

    try {
      //console.log(form.entries());
      const res = await axios.patch(
        `/api/v1/recipes/getRecipeByIdAndUpdate/${data._id}`,
        updatingData,
        {
          withCredentials: true,
        }
      );
      console.log("res is ", res);
      if (res?.data?.status == "success") {
        dispatch(info({ message: "Food items updated " }));
        window.setTimeout(() => {
          nevigate("/home");
        }, 1500);
      }
    } catch (err) {
      //console.log(err);
      dispatch(
        warning({
          message: err?.responce?.msg || "Food item not added please try again",
        })
      );
    }
  }
  return (
    <div className="w-2/2 flex justify-center">
      <div className="w-2/3 flex flex-col justify-center">
        <p className="text-sm text-gray-500 p-3">
          You can update only following fields
        </p>
        <div className="py-2 flex flex-col space-y-2">
          <label htmlFor="name" className="text-black font-bold text-xl">
            Long Description <sup className="text-gray-700 text-xl">*</sup>
          </label>
          <textarea
            rows={5}
            value={data.description}
            type="text"
            name="description"
            className="p-2 rounded outline-none border-1 border-gray-300 border border-gray-700  focus:border-2 focus:border-gray-800"
            id=""
            placeholder="in 25 to 40 words"
            onChange={handleChange}
          />
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <label htmlFor="name" className="text-black font-bold text-xl">
            Short Description <sup className="text-gray-700 text-xl">*</sup>
          </label>
          <input
            value={data.shortDesc}
            type="text"
            name="shortDesc"
            className="p-2 rounded outline-none border-b-2 border-gray-700  focus:border-2 focus:border-gray-800"
            id=""
            placeholder="in 10 to 30 words"
            onChange={handleChange}
          />
        </div>
        <div className="py-2 flex flex-col space-y-2 items-center justify-around">
          <label htmlFor="name" className="text-black font-bold text-xl">
            Steps <sup className="text-gray-700 text-xl">*</sup>
          </label>
          <input
            type="number"
            className="p-2 rounded outline-none border-b-2 border-gray-700  focus:border-2 focus:border-gray-800"
            id=""
            name="steps"
            placeholder="Enter no of steps and add it"
            // value={state.steps.length}
            onChange={handleChange}
          />
          <button
            className="bg-black hover:bg-gray-600 shadow-md hover:shadow-lg hover:scale-105 rounded-xl px-3 py-2 text-white"
            onClick={(e) => addInputSteps(e)}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col">
          {steps.length > 0 &&
            steps.map((el, i) => {
              return (
                <div key={i}>
                  <div className="py-2">
                    <input
                      type="text"
                      name={i}
                      onChange={handleStepChange}
                      value={steps[i]}
                      id=""
                      className="p-2 rounded outline-none border-b-2 border-gray-300  focus:border-2 focus:border-gray-400 w-full "
                      placeholder={`Step - ${i + 1}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="py-2 flex flex-col space-y-2">
          <label htmlFor="name" className="text-black font-bold text-xl">
            ingredients <sup className="text-gray-700 text-xl">*</sup>
          </label>
          <input
            type="text"
            name="ingredients"
            className="p-2 rounded outline-none border-b-2 border-gray-700  focus:border-2 focus:border-gray-800"
            id=""
            value={data.ingredients}
            placeholder="Salt,Pepper,oil ...etc"
            onChange={handleChange}
          />
        </div>

        <div className="my-10 flex flex-col ">
          <button
            className="px-5 py-2 rounded-full bg-black text-white w-2/2 lg:w-1/3 self-center hover:bg-gray-500 shadow-md hover:shadow-md hover:scale-105"
            onClick={handleSubmitItems}
          >
            {" "}
            Update food recipe
          </button>
        </div>
      </div>
    </div>
  );
}
