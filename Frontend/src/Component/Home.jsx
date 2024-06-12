import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}
