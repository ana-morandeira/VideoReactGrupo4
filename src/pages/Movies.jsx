import { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
//importamos el componente
import { getAllBooks } from "../services/MoviesServices";

const Movies = () => {
  const [movies, setMovies] = useState([]);

const fetchBooks = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">
        Películas 🎬
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-10">
        {movies.map(movie => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default MoviesCard;