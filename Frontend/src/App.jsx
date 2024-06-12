import { useState } from "react";
import LoginForm from "./Component/Login";
import Signup from "./Component/Signup";
import Navbar from "./Component/Header";
import Home from "./Component/Home";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <>
      {/* {tab == 0 ? <LoginForm setTab={setTab} /> : <Signup setTab={setTab} />} */}
      <Home />
    </>
  );
}

export default App;
