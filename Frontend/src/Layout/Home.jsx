import Footer from "../Component/Footer";
import Navbar from "../Component/Header";

export default function Home({ children }) {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className=" my-32">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
