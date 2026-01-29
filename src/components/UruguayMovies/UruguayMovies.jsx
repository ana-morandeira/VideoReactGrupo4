export default function UruguayMovies({ movies = [] }) {
  return (
    <section className="w-full flex flex-col gap-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-white">
          Tall Tales Cinema
        </h2>
        <button className="px-4 py-2 border border-white rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition">
          Discover All
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative flex flex-col h-[360px] w-[60px] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-visible"
          >
            {/* Movie Image */}
            <img
              src={movie.imagen}
              alt={movie.titulo}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Overlay for title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-white text-xs font-semibold text-center">
              {movie.titulo}
            </div>

            {/* Side description siempre visible parcialmente */}
            <div className="absolute top-2 right-[-120px] w-32 bg-black/70 text-white rounded-lg p-2 shadow-lg text-xs flex flex-col gap-1 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-105">
              <h4 className="font-bold text-sm">{movie.titulo}</h4>
              <p className="truncate">{movie.argumento || "No description available"}</p>
              <span className="text-purple-400 font-medium text-xs">✨ Recommended</span>
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-2xl pointer-events-none transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
