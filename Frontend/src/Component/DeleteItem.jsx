import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { info, warning } from "../Redux/Slices/errorSlice";

export function DeleteItem({ data, setDelD, id }) {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  async function handleDelete(e) {
    try {
      //console.log(form.entries());
      const res = await axios.delete(
        `/api/v1/recipes/getRecipeByIdAndDelete/${id}`
      );
      console.log("res is ", res);
      if (res?.data?.status == "success") {
        dispatch(info({ message: "Food items deleted " }));
        window.setTimeout(() => {
          nevigate("/home");
        }, 1500);
      }
    } catch (err) {
      console.log(err?.response?.data?.msg);
      dispatch(
        warning({
          message:
            err?.response?.data?.msg || "Food item not added please try again",
        })
      );
    }
  }
  return (
    <>
      <Dialog
        open={open}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{data}</DialogHeader>
        <DialogBody>{DataTransfer.msg}</DialogBody>
        <DialogFooter>
          <Button
            className="mr-1 text-black bg-white"
            onClick={() => {
              setDelD(false);
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-red-500 p-2 rounded-xl text-white"
            onClick={handleDelete}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
