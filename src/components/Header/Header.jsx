import { Link } from "react-router-dom";
import image from "./logoVideoclub.png";

function Header() {
  return (
    <header className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo → Home */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src={image}
            alt="Logo"
            className="w-[50px] h-[50px] inline-block"
          />
          <p className="text-white font-semibold text-lg">
            React Project
          </p>
        </Link>

        {/* Navegación */}
        <nav className="flex gap-6 text-white text-base">
          <Link
            to="/"
            className="hover:underline"
          >
            Home
          </Link>

          <Link
            to="/peliculas"
            className="hover:underline"
          >
            Películas
          </Link>
        </nav>

        <span className="text-white text-sm">
          Academic Practice
        </span>
      </div>
    </header>
  );
}

export default Header;
