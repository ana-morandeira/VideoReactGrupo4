import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home.jsx";
import Peliculas from "./pages/Peliculas.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
</div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
