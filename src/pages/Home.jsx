import Header from "../components/Header/Header"
import ContemporaryCinema from "../components/ContemporaryCinema/ContemporaryCinema"
import ClassicJewels from "../components/ClassicJewels/ClassicJewels"
import ChileanMovies from "../components/ChileanMovies/ChileanMovies"
import UruguayMovies from "../components/UruguayMovies/UruguayMovies"
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
const peliculasMexico= mexico ? mexico.peliculas : [];

const francia = movies.find(country => country.pais === "Francia");
const peliculasFrancia= francia ? francia.peliculas : [];




  return (
    <div className="bg-black text-white">
      <Header />
      <ClassicJewels movies={peliculasMexico}/>
      <Footer />
    </div>
  );
}

export default Home;
