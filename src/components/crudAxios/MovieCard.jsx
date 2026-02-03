import React from 'react';

const images = import.meta.glob(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const MovieCard = ({ movie = {}, pais, onDelete, onEdit }) => {
  if (!movie) return null;
  
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    
    const key = `/${imagePath}`;
    return images[key]?.default || '';
  };

  return (
    <div className="bg-gray-900 border border-gray-700 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      <img 
        src={getImageUrl(movie.imagen)} 
        alt={movie.titulo} 
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/400x225?text=No+Image';
        }}
      />
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="font-bold text-xl text-white leading-tight">
            {movie.titulo || "Sin título"}
          </h2>
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
            {movie.año || "S/A"}
          </span>
        </div>

        <p className="text-white text-sm font-medium mb-2">
          Director: <span className="font-normal">{movie.director || "Desconocido"}</span>
        </p>
        
        <p className="text-gray-400 text-xs mb-4 uppercase tracking-wide">
          {pais} | {movie.genero || "Género no definido"}
        </p>

        <p className="text-white text-sm line-clamp-3 mb-4 italic flex-grow">
          "{movie.argumento || "Sin argumento disponible."}"
        </p>

        <div className="space-y-2 mt-auto">
          <a 
            href={movie.trailer} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
          >
            ▶️ Ver Trailer
          </a>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onEdit(movie)}
              className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 font-semibold text-sm transition-colors"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(pais, movie.id)}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-red-700 font-semibold text-sm transition-colors"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;