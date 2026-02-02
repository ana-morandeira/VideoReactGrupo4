import Header from "../components/Header/Header";
import FeacturedFilms from "../components/Card/FeacturedFilms";
import IberoAmericanMovies from "../components/IberoAmericanMovies/IberoAmericanMovies"
import Footer from "../components/Footer/Footer"

import { getMovies } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const movieData = await getMovies();
        setMovies(movieData);
      } catch {}
    }
    loadMovies();
  }, []);

  const italia = movies.find((country) => country.pais === "italia");
  const peliculasItalia = italia ? italia.peliculas : [];

  const francia = movies.find((country) => country.pais === "Francia");
  const peliculasFrancia = francia ? francia.peliculas : [];

  const uk = movies.find((country) => country.pais === "uk");
  const peliculasUk = uk ? uk.peliculas : [];


const argentina = movies.find(country => country.pais === "Argentina");
const peliculasArgentina = argentina ? argentina.peliculas : [];
const argentinaCategory = "Argentina";

const mexico = movies.find(country => country.pais === "México");
const peliculasMexico= mexico ? mexico.peliculas : [];
const mexicoCategory = "Mexico";

const chile = movies.find(country => country.pais === "chile");
const peliculasChile= chile ? chile.peliculas : [];
const chileCategory = "Chile";

  return (
    <div className="bg-black text-white">
      <FeacturedFilms movies={peliculasUk} />
      <FeacturedFilms movies={peliculasFrancia} />
      <FeacturedFilms movies={peliculasItalia} />
              <IberoAmericanMovies movies={peliculasArgentina} category={argentinaCategory}/>
      <IberoAmericanMovies movies={peliculasMexico} category={mexicoCategory}/>
      <IberoAmericanMovies movies={peliculasChile} category={chileCategory}/> 
    </div>
  );
}

export default Home;