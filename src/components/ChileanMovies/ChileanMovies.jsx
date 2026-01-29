export default function ModernFlicks({ movies = [] }) {
  return (
    <section className="w-full flex flex-col gap-10">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
            Chilean Movies Modern Movie Picks
          </h2>
        </div>

        <button className="px-5 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition">
          See All
        </button>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <img
              src={movie.imagen}
              alt={movie.titulo}
              className="w-full h-80 object-cover"
            />
            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider">
                {movie.titulo}
              </p>
              <h3 className="text-lg font-semibold">{movie.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}