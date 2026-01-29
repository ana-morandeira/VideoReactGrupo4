export default function ContemporaryCinema({movies = []}) {


    return (
        <section className="w-full flex flex-col gap-10">
            {/* Top row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-black" />
                    <h2 className="text-sm font-medium uppercase tracking-wide">
                        Contemporary Spanish cinema
                    </h2>
                </div>


                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="text-sm font-medium">Explore recent</span>
                    <span className="text-lg leading-none">&gt;</span>
                </div>
            </div>


            {/* Bottom row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex flex-col gap-2">
                        <div className="rounded-xl overflow-hidden aspect-[2/3] bg-gray-100">
                            <img
                                src={movie.imagen}
                                alt={movie.titulo}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs font-medium text-left">
                            {movie.titulo}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}