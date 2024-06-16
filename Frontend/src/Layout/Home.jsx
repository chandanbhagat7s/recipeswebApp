import Footer from "../Component/Footer";
import Navbar from "../Component/Header";

export default function Home({ children }) {
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="">
        <Navbar />
      </div>
      <div className="bg-gray-50 mt-32 mb-5 rounded-xl">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
