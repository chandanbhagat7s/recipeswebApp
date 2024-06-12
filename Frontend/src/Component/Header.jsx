export default function Navbar() {
  return (
    <div className="absolute z-[100] ">
      <div className="bg-white w-[100vw] flex  px-5 lg:px-16 py-1 lg:flex-row items-center fixed flex-col md:flex-row space-y-2 md:space-y-0">
        <div className="logo w-2/2 md:w-1/3">
          <img
            // src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
            src="https://img.freepik.com/vector-premium/logotipo-comida-cuchara-tenedor-sonrisa-ilustracion-diseno-comida-deliciosa-lengua-saliva_207371-61.jpg"
            alt="logo image"
            className="w-1/4 mx-auto md:w-1/4"
          />
        </div>
        <div className="serach w-2/2 md:w-1/3">
          <input
            type="text"
            className="px-5 py-2 text-red-500 rounded-full border border-red-500 outline-none focus:ring-red-700"
          />
        </div>
        <nav className="flex space-x-2 w-2/2 md:w-1/3 justify-end text-sm md:text-lg">
          <div className="p-2 rounded text-red-300 hover:bg-red-500 hover:text-white font-bold border border-red-300 cursor-pointer ">
            Home
          </div>
          <div className="p-2 rounded text-red-300 hover:bg-red-500 hover:text-white font-bold border border-red-300 cursor-pointer">
            About
          </div>
          <div className="p-2 rounded text-red-300 hover:bg-red-500 hover:text-white font-bold border border-red-300 cursor-pointer">
            Profile
          </div>
        </nav>
      </div>
    </div>
  );
}
