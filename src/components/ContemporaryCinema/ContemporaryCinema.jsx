export default function ContemporaryCinema() {
    const movies = [
        {
            id: 1,
            title: "Film One",
            poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 2,
            title: "Film Two",
            poster: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 3,
            title: "Film Three",
            poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 4,
            title: "Film Four",
            poster: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 5,
            title: "Film Five",
            poster: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 6,
            title: "Film Six",
            poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=600&q=80",
        },
    ];


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
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs font-medium text-left">
                            {movie.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}