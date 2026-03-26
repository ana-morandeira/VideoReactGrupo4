import { useEffect, useState } from "react";
import MovieCard from "../components/crudAxios/MovieCard.jsx";
import { getAllMovies, deleteMovieFromServer } from "../services/MoviesServices";
import AddMovies from "../components/crudAxios/AddMovie.jsx";

const Peliculas = () => {
  const [movies, setMovies] = useState([]);
  const [MovieEdit, setMovieEdit] = useState(null);

  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovieFromServer(id);
    fetchMovies();
  };

  const handleEdit = (movie) => {
    setMovieEdit(movie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = async () => {
    await fetchMovies();
    setMovieEdit(null);
  };

  return (
    <div className="container">
      <h1 className="bg-black text-center my-8 text-3xl font-bold text-white tracking-wide">
        🎬 Cartelera de Películas
      </h1>

      <AddMovies MovieEdit={MovieEdit} onFormSubmit={handleFormSubmit} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              movie={movie}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peliculas;