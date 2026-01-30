import React, { useState } from 'react';
import axios from 'axios';

const MoviesCard = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Revisa que el puerto (3000, 5000, etc) coincida con tu JSON Server
      await axios.post('http://localhost:3000/coproducciones', {
        title: title
      });
      alert('¡Película añadida con éxito!');
      setTitle(''); // Limpiar input
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
    <h2 style={{ marginBottom: '20px' }}>Añadir Nueva Película</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <input 
        type="text" 
        placeholder="Nombre de la película"
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Guardar
      </button>
    </form>
  </div>
  );
};

export default MoviesCard;