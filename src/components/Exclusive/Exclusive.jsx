function Exclusive() {
    return (
        <div className="w-full h-80 overflow-hidden relative">
            {/* Imagen cine en casa - opción 4 */}
            <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                alt="Cine en casa con televisión"
                className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold tracking-wide">
                    Contenido
                </h3>
                <h2 className="text-orange-500 text-2xl font-bold">
                    Exclusivo
                </h2>
                <p className="text-amber-700 text-sm font-medium">
                    Solo para miembros
                </p>
            </div>
        </div>
    );
};

export default Exclusive;