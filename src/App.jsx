import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exclusive from './components/Exclusive/Exclusive'
import ClassicJewels from "./components/ClassicJewels/ClassicJewels.jsx";
import ContemporaryCinema from "./components/ContemporaryCinema/ContemporaryCinema.jsx";
import Peliculas from './pages/Peliculas.jsx';


function App() {
  return (
    <div>
      <Header />
      <ContemporaryCinema />
      <ClassicJewels />
      <Peliculas />
      <Footer />
    </div>
  )
}

export default App