import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function DisplayFood() {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <div className="p-5  rounded-xl">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <div className="heading">
            <p className="text-2xl font-bold text-gray-500">{state.name}</p>
          </div>
          <div className="w-2/2 lg:w-2/3 flex border-0">
            <Carousel transition={{ duration: 2 }} className="rounded-xl">
              {state.images.map((el) => {
                return (
                  <>
                    <img
                      src={`http://127.0.0.1:4000/images/${el}`}
                      alt="image 1"
                      className="h-[40vh] lg:h-[70vh] w-full object-cover"
                    />
                  </>
                );
              })}
            </Carousel>
          </div>
          <div className="w-2/2 lg:w-3/4 text-gray-500 p-2 ">
            {state.shortDesc}
          </div>
          <div className="p-3  flex flex-col justify-center lg:flex-row w-2/3">
            <div className="w-2/2 lg:w-1/3">
              <img
                src={`http://127.0.0.1:4000/cover/${state.coverImage}`}
                alt=""
              />
            </div>
            <div className="w-2/2 lg:w-2/3 flex flex-col justify-around space-x-5">
              {state.steps.map((el, i) => {
                return (
                  <>
                    <p className="border-1 border text-gray-800 p-2 my-2 rounded-xl hover:bg-gray-200">
                      <span className="text-black font-bold mx-2">
                        {" "}
                        {i + 1 + "."}
                      </span>
                      {el}
                    </p>
                  </>
                );
              })}
            </div>
          </div>

          <div className="w-2/2 lg:w-2/3 flex flex-col md:flex-row lg:flex-row justify-around">
            <div className="flex flex-col">
              <p className="text-black font-bold p-2">ingredients</p>
              {state.ingredients[0].split(",").map((el) => {
                return (
                  <>
                    <p className="text-black p-2 bg-gray-300 my-2 rounded-xl text-center ">
                      {el}
                    </p>
                  </>
                );
              })}
            </div>
            <div className="desc py-5 text-gray-600 w-2/2 md:w-2/3 lg:w-2/3 px-2">
              <p className="text-black font-bold">Some information</p>
              {state.description}
            </div>
          </div>
          <div className="w-2/2 lg:w-2/3 flex flex-col px-3 justify-center">
            <p className="font-bold px-2">Recipe Posted By</p>
            <div>
              <Card className="mt-2">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {state.createdBy.name}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>See More Posts</Button>
                  <p className="text-red-400">*not implemented sorry</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
