function MovieCard({ movie }) {
    return (
        <>
            <p>{movie.titulo}</p>
            <img src={movie.imagen}></img>
        </>
    )
}

export default MovieCard
