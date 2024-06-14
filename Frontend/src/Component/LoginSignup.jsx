import React, { useState } from "react";
import Signup from "./Signup";
import LoginForm from "./Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginSignup() {
  const [tab, setTab] = useState(0);
  const nevigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    nevigate("/home");
    return;
  }

  return (
    <>{tab == 0 ? <LoginForm setTab={setTab} /> : <Signup setTab={setTab} />}</>
  );
}
