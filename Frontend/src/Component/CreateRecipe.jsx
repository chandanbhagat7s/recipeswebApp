import axios from "axios";
import { CiFileOn } from "react-icons/ci";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { error, info, warning } from "../Redux/Slices/errorSlice";

export default function CreateRecipe() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [steps, setSteps] = useState([]);

  const [data, setData] = useState({
    name: "",
    shortDesc: "",
    description: "",
    steps: 0,
    ingredients: "",
    category: "",
    image1: "",
    image2: "",
    image3: "",
    coverImage: "",

    pimage1: "",
    pimage2: "",
    pimage3: "",
    pcoverImage: "",
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
    //console.log("called", e);
    let { name, value } = e.target;
    //console.log(" ", name, value);
    if (e?.target?.type == "file") {
      //console.log("CAME INTO");
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.addEventListener("load", function () {
        //console.log("CAME INTO HAND", name);
        if (name == "image1") {
          //console.log("came", this.result);
          return setData({
            ...data,
            [name]: e.target.files[0],
            pimage1: this.result,
          });
        } else if (name == "image2") {
          return setData({
            ...data,
            [name]: e.target.files[0],
            pimage2: this.result,
          });
        } else if (name == "image3") {
          return setData({
            ...data,
            [name]: e.target.files[0],
            pimage3: this.result,
          });
        } else if (name == "coverImage") {
          return setData({
            ...data,
            [name]: e.target.files[0],
            pcoverImage: this.result,
          });
        }
      });
      //console.log(data);
      return;

      // value = e.target.files[0];
    }
    //console.log(data);
    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmitItems(e) {
    e.preventDefault();
    const form = new FormData();
    for (const key in data) {
      // const value = product[key];
      // //console.log(`Key: ${key}, Value: ${value}`);
      if (
        key == "pimage1" ||
        key == "image1" ||
        key == "image2" ||
        key == "image3" ||
        key == "pimage2" ||
        key == "pimage3" ||
        key == "steps" ||
        key == "pcoverImage"
      ) {
        continue;
      }
      form.append(key, data[key]);
    }
    // //console.log(form);
    form.append("Images", data.image1);
    form.append("Images", data.image2);
    form.append("Images", data.image3);
    form.append("steps", steps);

    try {
      //console.log(form.entries());
      const res = await axios.post("/api/v1/recipes/createRecipe", form, {
        withCredentials: true,
      });
      //console.log("res is ", res);
      if (res?.data?.status == "success") {
        //console.log(res.data.status, " Product added ");
        dispatch(info({ message: "Food items added " }));
        window.setTimeout(() => {
          // location.assign('/me')
        }, 1500);
      }
    } catch (err) {
      //console.log(err);
      dispatch(
        warning({
          message: err?.responce?.msg || "Food item not added please try again",
        })
      );
      // //console.log(err.response.data.msg);
    }
  }

  return (
    <>
      <div className="w-2/2 lg:w-2/3 px-5 pt-5 lg:py-3 mx-auto rouded-xl bg-gray-100 rounded-xl  ">
        <form action="flex flex-col ">
          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Dish name <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <input
              type="text"
              name="name"
              className="p-2 rounded outline-none border-b-2 border-gray-700  focus:border-2 focus:border-gray-800"
              id=""
              placeholder="Egg , chicken ..."
              onChange={handleChange}
            />
          </div>
          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Short Description <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <input
              type="text"
              name="shortDesc"
              className="p-2 rounded outline-none border-b-2 border-gray-700  focus:border-2 focus:border-gray-800"
              id=""
              placeholder="in 10 to 30 words"
              onChange={handleChange}
            />
          </div>

          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Long Description <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <textarea
              rows={5}
              type="text"
              name="description"
              className="p-2 rounded outline-none border-1 border-gray-300 border border-gray-700  focus:border-2 focus:border-gray-800"
              id=""
              placeholder="in 25 to 40 words"
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
              placeholder="Salt,Pepper,oil ...etc"
              onChange={handleChange}
            />
          </div>
          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Category <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <select
              className="block w-1/3 p-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              name="category"
            >
              <option value="<30 min">Option 1</option>
              <option value="<1 hour">Option 2</option>
              <option value="1 hour +">Option 3</option>
            </select>
          </div>

          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Images <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <p className="text-black text-sm">
              please select horizontal image for better usage
            </p>
            <div className="flex space-x-2">
              <input
                onChange={handleChange}
                type="file"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                name="image1"
                className="hidden "
                id="image1"
              />
              <label
                className="h-32 w-1/3 border border-gray-500 rounded-xl flex justify-center items-center"
                htmlFor="image1"
              >
                Select file
                <CiFileOn />
              </label>
              <input
                onChange={handleChange}
                type="file"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                name="image2"
                className="hidden "
                id="image2"
              />
              <label
                className="h-32 w-1/3 border border-gray-500 rounded-xl flex justify-center items-center"
                htmlFor="image2"
              >
                Select file
                <CiFileOn />
              </label>
              <input
                onChange={handleChange}
                type="file"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                name="image3"
                className="hidden "
                id="image3"
              />
              <label
                className="h-32 w-1/3 border border-gray-500 rounded-xl flex justify-center items-center"
                htmlFor="image3"
              >
                Select file
                <CiFileOn />
              </label>
            </div>
          </div>

          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Preview of images <sup className="text-gray-700 text-xl">*</sup>
              <p className="text-black text-sm font-semibold">
                please select horizontal image for better usage from above
              </p>
            </label>
            <div className="flex space-x-2 flex-col lg:flex-row justify-center ">
              <div className=" my-2 h-32 w-2/2 md:w-1/3 md:self-center lg:w-1/3 border border-gray-500 rounded-xl flex justify-center items-center">
                {data.pimage1 ? (
                  <>
                    <img
                      src={data.pimage1}
                      className="object-cover h-full w-full"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className=" my-2 h-32 w-2/2 md:w-1/3 md:self-center lg:w-1/3 border border-gray-500 rounded-xl flex justify-center items-center">
                {data.pimage2 ? (
                  <>
                    <img
                      src={data.pimage2}
                      className="object-cover h-full w-full"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className=" my-2 h-32 w-2/2 md:w-1/3 md:self-center lg:w-1/3 border border-gray-500 rounded-xl flex justify-center items-center">
                {data.pimage3 ? (
                  <>
                    <img
                      src={data.pimage3}
                      className="object-cover h-full w-full"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Cover Image <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <div className="flex space-x-2">
              <input
                onChange={handleChange}
                type="file"
                required
                accept="*"
                name="coverImage"
                className="hidden "
                id="imageCover"
              />
              <label
                className="h-32 w-1/3 border border-gray-500 rounded-xl flex justify-center items-center"
                htmlFor="imageCover"
              >
                Select file
                <CiFileOn />
              </label>
            </div>
          </div>

          <div className="py-2 flex flex-col space-y-2">
            <label htmlFor="name" className="text-black font-bold text-xl">
              Cover Image <sup className="text-gray-700 text-xl">*</sup>
            </label>
            <div className="flex">
              <div className="h-64 w-1/2 md:w-1/4 mx-auto lg:w-1/3 border border-gray-500 rounded-xl flex justify-center items-center">
                {data.pcoverImage ? (
                  <>
                    <img
                      src={data.pcoverImage}
                      className="object-cover h-full w-full"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="my-10 flex flex-col ">
            <button
              className="px-5 py-2 rounded-full bg-black text-white w-2/2 lg:w-1/3 self-center hover:bg-gray-500 shadow-md hover:shadow-md hover:scale-105"
              onClick={handleSubmitItems}
            >
              {" "}
              Create food Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
