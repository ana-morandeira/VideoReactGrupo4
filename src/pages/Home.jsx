import FeacturedFilms from "../components/Card/FeacturedFilms";
import IberoAmericanMovies from "../components/IberoAmericanMovies/IberoAmericanMovies";
import { getAllMovies } from "../services/MoviesServices";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const movieData = await getAllMovies();
        setMovies(movieData);
      } catch {}
    }
    loadMovies();
  }, []);

  const peliculasArgentina = movies.filter((m) => m.genero === "Argentina");
  const peliculasMexico = movies.filter((m) => m.genero === "México");
  const peliculasChile = movies.filter((m) => m.genero === "Chile");
  const peliculasUk = movies.filter((m) => m.genero === "UK");
  const peliculasFrancia = movies.filter((m) => m.genero === "Francia");
  const peliculasItalia = movies.filter((m) => m.genero === "Italia");

  return (
    <div className="bg-black text-white">
      <FeacturedFilms movies={peliculasUk} title="Películas Reino Unido" countryName="UK" />
      <FeacturedFilms movies={peliculasFrancia} title="Películas Francia" countryName="Francia" />
      <FeacturedFilms movies={peliculasItalia} title="Peliculas Italia" countryName="Italia" />
      <IberoAmericanMovies movies={peliculasArgentina} category="Argentina" />
      <IberoAmericanMovies movies={peliculasMexico} category="Mexico" />
      <IberoAmericanMovies movies={peliculasChile} category="Chile" />
    </div>
  );
}

export default Home;