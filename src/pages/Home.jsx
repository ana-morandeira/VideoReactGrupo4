import Header from "../components/Header/Header"
import ContemporaryCinema from "../components/ContemporaryCinema/ContemporaryCinema"
import ClassicJewels from "../components/ClassicJewels/ClassicJewels"
import Footer from "../components/Footer/Footer"

import { getMovies } from "../services/api"
import { useEffect, useState } from "react"

function Home() {
  
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    async function loadMovies(){
      try{
        const movieData = await getMovies();
        setMovies(movieData);
      }
      catch{

      }
    }
    loadMovies();
  },[])


const argentina = movies.find(country => country.pais === "Argentina");
const peliculasArgentina = argentina ? argentina.peliculas : [];

const mexico = movies.find(country => country.pais === "México");
const peliculasMexico= argentina ? mexico.peliculas : [];




  return (
    <div className="bg-black text-white">
      <Header />
      <ContemporaryCinema movies={peliculasArgentina}/>
      <ContemporaryCinema movies={peliculasMexico}/>
      <ContemporaryCinema movies={peliculasArgentina}/>
      <ClassicJewels />
      <Footer />
    </div>
  );
}

export default Home;
