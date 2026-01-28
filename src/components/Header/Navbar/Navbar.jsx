import { useState } from "react";

function Navbar() {
  const [isOpen, IsOpenCheck] = useState(false);


    
 

  return (
    <header className="flex flex-col lg:flex-row p-6 lg:p-8 border-b-2 relative">
      <div className="flex justify-center items-center w-full lg:w-2/6 mb-4 lg:mb-0">
        <img
          src="src/assets/logos/iberianMovieLogo.svg"
          alt="Logo de la Aplicación Web del Videoclub"
          className="lg:max-w-[30%] max-w-[13%] mr-4"
        />
        <h1 className="text-1xl lg:text-5xl font-bold">
          Iberian <span className="text-amber-300">Movie</span>
        </h1>
      </div>

        <div className="absolute top-10 left-10">
            <button className="lg:hidden cursor-pointer hover:text-amber-300" onClick={()=>IsOpenCheck(!isOpen)}>{isOpen ? "✖" : "☰"} </button>
        </div>
      
      <nav className={`w-full lg:w-2/6 ${isOpen ? "flex" : "hidden"} lg:flex` }>
        <ul className="flex flex-col lg:flex-row items-center justify-center w-full text-center text-2xl lg:text-3xl">
          <li className="flex-1 flex justify-center my-4 border-b-2 w-full lg:border-none">
            <a href="" className="hover:text-amber-200">
              Explore
            </a>
          </li>
          <li className="flex-1 flex justify-center my-4 border-b-2 w-full lg:border-none">
            <a href="" className="hover:text-amber-200">
              Directors
            </a>
          </li>
          <li className="flex-1 flex justify-center my-4 border-b-2 w-full lg:border-none">
            <a href="" className="hover:text-amber-200">
              My List
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center w-full lg:w-2/6 mt-4 lg:mt-0">
        <input
          type="text"
          className="bg-white w-4/6 rounded-3xl block text-black lg:p-4 p-2 text-xl lg:w-2/3 lg:text-2xl border-2"
          placeholder="Buscar Película"
        />
      </div>
    </header>
  );
}
export default Navbar;
 