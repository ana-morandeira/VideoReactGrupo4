import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/coproducciones")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <ul>
            {movies.map(pais =>
                pais.peliculas.map(pelicula => (
                    <li key={pelicula.id}>
                        <MovieCard movie={pelicula} />
                    </li>
                ))
            )}
        </ul>
    );
}

export default Movies
