import React, { useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movie, setMovie] = useState({
    titulo: '',
    director: '',
    año: '',
    genero: '',
    argumento: '',
    imagen: '',
    imageCartel: '',
    trailer: ''
  });

  const [paisId, setPaisId] = useState("1");

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:3000/coproducciones/${paisId}`;
      const response = await axios.get(url);
      const paisActual = response.data;

      const nuevaPelicula = { 
        ...movie, 
        id: Date.now(), 
        año: Number(movie.año)
      };

      paisActual.peliculas.push(nuevaPelicula);
      await axios.put(url, paisActual);

      alert('¡Película añadida con éxito!');
      setMovie({ 
        titulo: '', 
        director: '', 
        año: '', 
        genero: '', 
        argumento: '', 
        imagen: '', 
        imageCartel: '', 
        trailer: '' 
      });
      
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error: Verifica que json-server esté en puerto 3001');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎬 Nueva Película</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">País:</label>
          <select 
            value={paisId} 
            onChange={(e) => setPaisId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="1">🇦🇷 Argentina</option>
            <option value="2">🇲🇽 México</option>
            <option value="3">🇫🇷 Francia</option>
          </select>
        </div>

        <input 
          name="titulo" 
          placeholder="Título de la película" 
          value={movie.titulo} 
          onChange={handleChange} 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <input 
          name="director" 
          placeholder="Director" 
          value={movie.director} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <input 
          name="año" 
          type="number" 
          placeholder="Año" 
          value={movie.año} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <input 
          name="genero" 
          placeholder="Género" 
          value={movie.genero} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <textarea 
          name="argumento" 
          placeholder="Argumento" 
          value={movie.argumento} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-indigo-500"
        />
        
        <input 
          name="imagen" 
          placeholder="imagen.jpg (solo nombre de archivo)" 
          value={movie.imagen} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        
        <input 
          name="trailer" 
          placeholder="https://youtube.com/..." 
          value={movie.trailer} 
          onChange={handleChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg"
        >
          💾 Guardar Película
        </button>
      </form>
    </div>
  );
};

export default Movies;
