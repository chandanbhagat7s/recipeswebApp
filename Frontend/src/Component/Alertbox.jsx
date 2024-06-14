import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { defaulta } from "../Redux/Slices/errorSlice";

export const AlertBox = () => {
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch((state) => state.error);

  setTimeout(() => {
    dispatch(defaulta({ message: "" }));
  }, [4000]);

  return (
    <>
      <div
        className="absolute top-5 fixed mx-12 animate-bounce  "
        style={{ zIndex: 1000000 }}
      >
        {error.status == "" && <></>}
        {error.status == "success" && (
          <>
            <div className=" px-5 py-3 font-bold rounded-xl capitalize w-[90vw] flex justify-center bg-green-200">
              {error.message}
            </div>
          </>
        )}
        {error.status == "info" && (
          <>
            <div className=" px-5 py-3 font-bold rounded-xl capitalize w-[90vw] flex justify-center bg-blue-200">
              {error.message}
            </div>
          </>
        )}
        {error.status == "warning" && (
          <>
            <div className=" px-5 py-3 font-bold rounded-xl capitalize w-[90vw] flex justify-center bg-yellow-200">
              {error.message}
            </div>
          </>
        )}
        {error.status == "error" && (
          <>
            <div className=" px-5 py-3 font-bold rounded-xl capitalize w-[90vw] flex justify-center bg-red-200">
              {error.message}
            </div>
          </>
        )}
      </div>
    </>
  );
};
