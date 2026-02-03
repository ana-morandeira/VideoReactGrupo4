
export default function ClassicJewels() {
    const cards = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
            smallTitle: "COLLECTION",
            bigTitle: "Golden Rings",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
            smallTitle: "COLLECTION",
            bigTitle: "Elegant Necklaces",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
            smallTitle: "COLLECTION",
            bigTitle: "Luxury Earrings",
        },
    ];


    return (
        <div className="w-full flex flex-col gap-8">
            {/* Top row */}
            <div className="flex items-center justify-between">
                {/* Left title */}
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-black" />
                    <span className="uppercase tracking-wide text-sm font-medium">
                        classic jewels
                    </span>
                </div>


                {/* Right button */}
                <button className="px-6 py-2 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
                    curated collection
                </button>
            </div>


            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative h-80 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={card.image}
                            alt={card.bigTitle}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />


                        {/* Text overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-xs font-bold tracking-widest">
                                {card.smallTitle}
                            </p>
                            <h3 className="text-xl font-semibold">
                                {card.bigTitle}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}