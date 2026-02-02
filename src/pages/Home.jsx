import Header from "../components/Header/Header";
import FeacturedFilms from "../components/Card/FeacturedFilms";
import ContemporaryCinema from "../components/ContemporaryCinema/ContemporaryCinema";
import ClassicJewels from "../components/ClassicJewels/ClassicJewels";
import Footer from "../components/Footer/Footer";

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

  return (
    <div className="bg-black text-white">
      <Header />
      <FeacturedFilms movies={peliculasUk} />
      <FeacturedFilms movies={peliculasFrancia} />
      <FeacturedFilms movies={peliculasItalia} />
      <Footer />
    </div>
  );
}

export default Home;
