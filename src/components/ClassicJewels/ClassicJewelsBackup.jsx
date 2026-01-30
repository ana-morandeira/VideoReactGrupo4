export default function ClassicJewels({category, movies = []}) {
    return (
        <div className="w-full flex flex-col gap-1 p-[40px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
                {/* Left title */}
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-black" />
                    <span className="uppercase tracking-wide text-sm font-medium">
                        {category} Movies · Coproductions
                    </span>
                </div>


                {/* Right button */}
                <button className="px-6 py-2 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
                    curated collection
                </button>
            </div>


            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative h-80 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={movie.imagen}
                            alt={movie.titulo}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />


                        {/* Text overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-xl font-semibold">
                                {movie.titulo}
                            </h3>
                            <p className="text-xs font-bold tracking-widest">
                                {movie.año} · {movie.director}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}