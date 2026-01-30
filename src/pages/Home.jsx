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

const chile = movies.find(country => country.pais === "chile");
const peliculasChile= chile ? chile.peliculas : [];

const francia = movies.find(country => country.pais === "Francia");
const peliculasFrancia= francia ? francia.peliculas : [];

const uk = movies.find(country => country.pais === "uk");
const peliculasUk = uk ? uk.peliculas : [];

const italia = movies.find(country => country.pais === "italia");
const peliculasItalia= italia ? italia.peliculas : [];




  return (
    <div className="bg-black text-white">
      <Header />
      <ClassicJewels movies={peliculasArgentina}/>
      <ClassicJewels movies={peliculasMexico}/>
      <ClassicJewels movies={peliculasChile}/>
      <Footer />
    </div>
  );
}

export default Home;
