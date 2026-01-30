import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exclusive from './components/Exclusive/Exclusive'
import ClassicJewels from "./components/ClassicJewels/ClassicJewels.jsx";
import ContemporaryCinema from "./components/ContemporaryCinema/ContemporaryCinema.jsx";

import Home from "./pages/Home.jsx";
import Peliculas from './pages/Peliculas.jsx';


function App() {
  return (
     <BrowserRouter>
   
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>

      <ContemporaryCinema />
      <ClassicJewels />
      <Peliculas />
      <Footer />
      </BrowserRouter>
  
  )
}

export default App