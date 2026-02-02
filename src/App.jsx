// src/App.jsx
import { Routes, Route } from "react-router-dom"; // ✅ Importa solo Routes y Route
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home.jsx";
import Peliculas from "./pages/Peliculas.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
    </div>
  );
}

export default App;
