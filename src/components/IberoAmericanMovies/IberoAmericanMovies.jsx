export default function IberoAmericanMovies({ category, movies = [] }) {
    return (
        <div className="w-full flex flex-col gap-1 p-[40px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
                {/* Left title */}
                <div className="flex items-center gap-3">
                    {/* Divider */}
                    <div className="w-1 h-5 bg-black rounded-sm" />
                    {/* Title */}
                    <h2 className="text-base tracking-wide">
                        <span className="font-semibold uppercase">{category}</span>
                        <span className="ml-2 font-normal text-neutral-500">
                            Movies Collection
                        </span>
                    </h2>
                </div>
                {/* Right button */}
                <button className="px-5 py-2 border border-black rounded-full text-xs tracking-wide font-normal text-neutral-500 hover:bg-black hover:text-white transition-colors duration-200">
                    &gt;&gt; peek category
                </button>
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative h-56 rounded-2xl overflow-hidden 
               transform transition-all duration-300 
               hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
                    >
                        <img
                            src={movie.imagen}
                            alt={movie.titulo}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl" />

                        {/* Text overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-semibold text-white 
                 [text-stroke:1px_black] 
                 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
                                {movie.titulo}
                            </h3>
                            <p className="text-xs font-bold tracking-widest text-white 
                [text-stroke:0.5px_black] 
                [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                                {movie.año} · {movie.director}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}