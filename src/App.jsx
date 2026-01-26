import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exclusive from './components/Exclusive/Exclusive'
import FeaturedFilms from './components/Card/feacturedFilms'

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Exclusive/>
      <Footer/>
      <FeaturedFilms 
        title="Inception"
        genre="Sci-Fi"
        year="2010"
        countries={["USA", "UK"]}
        poster="https://example.com/inception-poster.jpg"
      />
    </div>
  )
}

export default App