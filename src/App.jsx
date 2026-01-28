import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exclusive from './components/Exclusive/Exclusive'
import ClassicJewels from "./components/ClassicJewels/ClassicJewels.jsx";
import ContemporaryCinema from "./components/ContemporaryCinema/ContemporaryCinema.jsx";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <ContemporaryCinema />
      <ClassicJewels />
      <Footer />
    </div>
  )
}

export default App

