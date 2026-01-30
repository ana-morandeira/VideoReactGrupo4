import { useEffect, useState } from "react";
import MovieCard from "../components/crudAxios/MovieCard.jsx";
import { getAllMovies, deleteMovieFromServer } from "../services/MoviesServices";
import AddMovies from "../components/crudAxios/AddMovie.jsx";

const Peliculas = () => {
  const [movies, setMovies] = useState([]);
  const [MovieEdit, setMovieEdit] = useState(null);

  const fetchMovies = async () => {
    const data = await getAllMovies();

    const allMovies = data.flatMap((paisObj) =>
      paisObj.peliculas.map((pelicula) => ({
        ...pelicula,
        pais: paisObj.pais,
      }))
    );

    setMovies(allMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (paisNombre, peliId) => {
    await deleteMovieFromServer(paisNombre, peliId);
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
      <h1 className="text-center my-8 text-3xl font-bold text-white tracking-wide "> 🎬 Cartelera de Películas </h1>

      <AddMovies
        MovieEdit={MovieEdit}
        onFormSubmit={handleFormSubmit}
      />


     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {movies.map((movie) => (
    <div key={movie.id}>

            <MovieCard
              movie={movie}
              pais={movie.pais}
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