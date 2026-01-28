const MoviesCard = ({ movie }) => {
  return (
    <li className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">
        {movie.title}
      </h2>
      <p className="text-gray-700">
        {movie.author}
      </p>
      <p className="text-sm text-gray-500">
        {movie.year}
      </p>
    </li>
  );
}

export default MoviesCard;